import { getPost, getPosts } from "./post";
import { mockKnex } from "../mocks/dbMock";

describe("Post Model", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should get a post by id", async () => {
    const postId = 1;
    const expectedPost = {
      id: 1,
      title: "Test Post",
      content: "This is a test post.",
    };

    const knexMock = {
      first: jest.fn().mockResolvedValue(expectedPost),
    };

    const { customKnexMock } = mockKnex(knexMock);

    const result = await getPost(postId);
    expect(result).toEqual(expectedPost);
    expect(customKnexMock.first).toHaveBeenCalled();
    expect(customKnexMock.where).toHaveBeenCalledWith({ id: 1 });
    expect(customKnexMock.select).toHaveBeenCalledWith("*");
  });
  it("should return null if post not found", async () => {
    const knexMock = {
      first: jest.fn().mockResolvedValue(null),
    };
    const { customKnexMock } = mockKnex(knexMock);
    const result = await getPost(1);
    expect(result).toBeNull();
    expect(customKnexMock.first).toHaveBeenCalled();
    expect(customKnexMock.where).toHaveBeenCalledWith({ id: 1 });
    expect(customKnexMock.select).toHaveBeenCalledWith("*");
  });
  it("should get all posts", async () => {
    const knexMock = {
      count: jest.fn().mockResolvedValue([{ count: 2 }]),
      limit: jest.fn().mockResolvedValue([
        { id: 1, title: "Test Post 1", content: "This is a test post 1." },
        { id: 2, title: "Test Post 2", content: "This is a test post 2." },
      ]),
      offset: jest.fn().mockReturnThis(),
    };
    const { customKnexMock } = mockKnex(knexMock);
    const result = await getPosts(0, 10);
    expect(result).toEqual({
      total: 2,
      skip: 0,
      limit: 10,
      posts: [
        { id: 1, title: "Test Post 1", content: "This is a test post 1." },
        { id: 2, title: "Test Post 2", content: "This is a test post 2." },
      ],
    });
    expect(customKnexMock.count).toHaveBeenCalled();
    expect(customKnexMock.offset).toHaveBeenCalled();
    expect(customKnexMock.select).toHaveBeenCalled();
  });
});
