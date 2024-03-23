import { getPost } from "./post";
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

});
