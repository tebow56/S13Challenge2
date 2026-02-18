module.exports = {
  paths: {
    "/create": {
      post: {
        tags: {
          Users: "Create a task",
        },
        description: "Create task",
        operationId: "createTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
  },
};


