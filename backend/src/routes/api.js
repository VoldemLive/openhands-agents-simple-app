const express = require('express');
const router = express.Router();

// GET /api - API info
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API',
    version: '1.0.0',
    endpoints: {
      'GET /api': 'API information',
      'GET /api/example': 'Example endpoint',
      'POST /api/example': 'Create example resource'
    }
  });
});

// GET /api/example - Example endpoint
router.get('/example', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, name: 'Example Item 1' },
      { id: 2, name: 'Example Item 2' },
      { id: 3, name: 'Example Item 3' }
    ]
  });
});

// POST /api/example - Create example resource
router.post('/example', (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ 
      success: false, 
      error: 'Name is required' 
    });
  }
  
  res.status(201).json({
    success: true,
    data: { 
      id: Date.now(), 
      name,
      createdAt: new Date().toISOString()
    }
  });
});

module.exports = router;
