import * as Knex from "../../src/lib/db";
import { getPost } from "./post";

jest.mock("../../src/lib/db");

const dbMock = Knex as jest.Mocked<typeof Knex>;

describe("Post Model", () => {
  afterEach(async () => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  let baseKnexMock: any
  beforeEach(()=> {
    baseKnexMock = {
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
    }
  })
  

  it("should get a post by id", async () => {
    const postId = 1;
    const expectedPost = {
      id: postId,
      title: "Test Post",
      content: "This is a test post.",
    };
  
    const knexMock = {
      ...baseKnexMock,
      first: jest.fn().mockResolvedValue(expectedPost),
    };
  
    dbMock.knex.mockImplementationOnce(() => knexMock);

    const result = await getPost(postId);
  
    expect(result).toEqual(expectedPost);

    expect(knexMock.select).toHaveBeenCalledWith("*");
    expect(knexMock.where).toHaveBeenCalledWith({id: 1});
    expect(knexMock.first).toHaveBeenCalled();
  });
});


