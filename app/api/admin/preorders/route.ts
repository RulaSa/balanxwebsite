import { NextResponse } from 'next/server'
import { getAllPreOrders } from '@/lib/db'

export async function GET() {
  try {
    const result = await getAllPreOrders()
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        preOrders: result.data,
        total: result.data?.length || 0
      })
    } else {
      return NextResponse.json(
        { 
          error: result.error || 'Failed to fetch pre-orders',
          success: false 
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Admin pre-orders fetch error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch pre-orders. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error',
        success: false
      },
      { status: 500 }
    )
  }
} 