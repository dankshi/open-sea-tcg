// Supabase database types - will be auto-generated when you connect Supabase
// Run: npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/database.ts

export type Database = {
  public: {
    Tables: {
      // Example: products table
      products: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          price: number;
          category: string;
          in_stock: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          price: number;
          category: string;
          in_stock?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          price?: number;
          category?: string;
          in_stock?: boolean;
          created_at?: string;
        };
      };
      // Example: orders table
      orders: {
        Row: {
          id: string;
          customer_email: string;
          status: "pending" | "confirmed" | "shipped" | "delivered";
          total: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          customer_email: string;
          status?: "pending" | "confirmed" | "shipped" | "delivered";
          total: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          customer_email?: string;
          status?: "pending" | "confirmed" | "shipped" | "delivered";
          total?: number;
          created_at?: string;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
};
