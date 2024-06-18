type Query = {
  table: "users" | "widgets" | "sessions";
  userId?: string;
  widgetId?: string;
  sessionId?: string;
  limit: number;
  offset: number;
};

type QueryNew =
  | {
      table: "users";
      userId: string;
    }
  | {
      table: "widgets";
      widgetId: string;
    }
  | {
      table: "sessions";
      sessionId: string;
    }
  | {
      table: "sales";
      saleId: string;
    };

// const options: Query = { table: "users", userId: "123" };

function query(options: QueryNew): string {
  switch (options.table) {
    case "users":
      return options.userId;
    case "widgets":
      return options.widgetId;
    case "sessions":
      return options.sessionId;
  }
}

// Exhaustive Switch

function query(options: QueryNew): string {
  switch (options.table) {
    case "users":
      return options.userId;
    case "widgets":
      return options.widgetId;
    case "sessions":
      return options.sessionId;
  }
}
