export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      properties: {
        Row: {
          created_at: string;
          id: number;
          image: string | null;
          name: string | null;
          price: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          image?: string | null;
          name?: string | null;
          price?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          image?: string | null;
          name?: string | null;
          price?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
