type Query = {
  table: "users" | "widgets" | "sessions";
  userId?: string;
  widgetId?: string;
  sessionId?: string;
  limit: number;
  offset: number;
};

type QueryNew = {
  limit: number;
  offset: number;
} & (
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
    }
);

// const options: Query = { table: "users", userId: "123" };

function queryone(options: QueryNew): string {
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

function querytwo(options: QueryNew): string {
  let id = "";

  switch (options.table) {
    case "users":
      id = options.userId;
      break;
    case "widgets":
      id = options.widgetId;
      break;
    case "sessions":
      id = options.sessionId;
      break;
    case "sales":
      id = options.saleId;
      break;
    default:
      assertCannotReact(options); // Checks to see if a QueryNew value is missing
  }
  return id;
}

function assertCannotReact(x: never) {
  throw new Error("cannot reach this place in the code");
}
