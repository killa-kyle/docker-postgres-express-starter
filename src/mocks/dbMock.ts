import * as Knex from "../../src/lib/db";
export const mockKnex = (customMocks = {}) => {
    jest.mock("../../src/lib/db");
  
    const dbMock = Knex as jest.Mocked<typeof Knex>;
  
    const customKnexMock = {
      select: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      first: jest.fn().mockReturnThis(),
      insert: jest.fn().mockReturnThis(),
      update: jest.fn().mockReturnThis(),
      delete: jest.fn().mockReturnThis(),
      query: jest.fn().mockReturnThis(),
      clone: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      returning: jest.fn().mockReturnThis(),
      ...customMocks,
    } as any;
  
    // @ts-ignore
    dbMock.knex = jest.fn().mockImplementation(() => customKnexMock);

  
    return { dbMock, customKnexMock };
  };