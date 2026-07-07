const express = require('express');
const mariadb = require('mariadb');
const cors = require( 'cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da conexão com o banco de dados MariaDB
const pool = mariadb.ddcreatePool({
     host: 'localhost', 
     user: '21d7', 
     password: '21s7', // ⚠️ IMPORTANTE: Escreva aqui a sua senha do MariaDB
     database: 'brecho_aninha',
     connectionLimit: 5
});

// ROTA COMERCIAL 1: Buscar produtos ativos para a vitrine
app.get('/api/produtos', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM v_balanco_estoque WHERE estoque_atual > 0");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        if (conn) conn.end();
    }
});

// ROTA COMERCIAL 2: Processar a venda (dar baixa automática)
app.post('/api/compra', async (req, res) => {
    const { id_produto, quantidade } = req.body;
    let conn;
    try {
        conn = await pool.getConnection();
        
        // Verifica estoque disponível
        const [prod] = await conn.query("SELECT estoque_atual FROM v_balanco_estoque WHERE id_produto = ?", [id_produto]);
        if (!prod || prod.estoque_atual < quantidade) {
            return res.status(400).json({ error: "Estoque insuficiente para este produto!" });
        }

        // Insere a saída
        await conn.query("INSERT INTO movimentacao_estoque (id_produto, tipo_movimentacao, quantidade) VALUES (?, 'saida', ?)", [id_produto, quantidade]);
        
        res.json({ success: true, message: "Baixa realizada!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    } finally {
        if (conn) conn.end();
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor comercial rodando perfeito na porta ${PORT}`));

