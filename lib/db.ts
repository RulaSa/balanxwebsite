import { sql } from '@vercel/postgres'

export interface PreOrder {
  id: string
  first_name: string
  last_name: string
  email: string
  created_at: Date
}

// Initialize the pre_orders table
export async function initializeDatabase() {
  try {
    // Create pre_orders table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS pre_orders (
        id VARCHAR(255) PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `
    
    // Create index on email for faster lookups
    await sql`
      CREATE INDEX IF NOT EXISTS idx_pre_orders_email ON pre_orders(email);
    `
    
    // Create index on created_at for sorting
    await sql`
      CREATE INDEX IF NOT EXISTS idx_pre_orders_created_at ON pre_orders(created_at);
    `
    
    console.log('Database initialized successfully')
    return { success: true }
  } catch (error) {
    console.error('Database initialization error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

// Insert a new pre-order
export async function insertPreOrder(preOrderData: Omit<PreOrder, 'created_at'>) {
  try {
    const result = await sql`
      INSERT INTO pre_orders (id, first_name, last_name, email)
      VALUES (${preOrderData.id}, ${preOrderData.first_name}, ${preOrderData.last_name}, ${preOrderData.email})
      RETURNING *;
    `
    
    return {
      success: true,
      data: result.rows[0] as PreOrder
    }
  } catch (error) {
    console.error('Insert pre-order error:', error)
    
    // Handle unique constraint violation (duplicate email)
    if (error instanceof Error && error.message.includes('duplicate key')) {
      return {
        success: false,
        error: 'This email has already been used for a pre-order',
        code: 'DUPLICATE_EMAIL'
      }
    }
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

// Get all pre-orders (for admin purposes)
export async function getAllPreOrders() {
  try {
    const result = await sql`
      SELECT * FROM pre_orders 
      ORDER BY created_at DESC;
    `
    
    return {
      success: true,
      data: result.rows as PreOrder[]
    }
  } catch (error) {
    console.error('Get all pre-orders error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

// Get pre-order by email
export async function getPreOrderByEmail(email: string) {
  try {
    const result = await sql`
      SELECT * FROM pre_orders 
      WHERE email = ${email.toLowerCase().trim()}
      LIMIT 1;
    `
    
    return {
      success: true,
      data: result.rows.length > 0 ? result.rows[0] as PreOrder : null
    }
  } catch (error) {
    console.error('Get pre-order by email error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
} 