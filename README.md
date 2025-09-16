# @alexstormwood/express-mcp-demo

Demo of how an ExpressJS server can be used as a LLM MCP server.

This repository is a central resource for this event for the Australian Computer Society: 

- https://www.acs.org.au/cpd-education/event-detail.html?eventId=701Om00000Pip5F

## About the Workshop

Large language models (LLMs) are becoming more-advanced, able to retrieve data from external sources and allow users to perform complex actions with natural language. The Model Context Protocol (MCP) is the next step up from that: it’s a protocol that allows a LLM to interact with other software, such as your API or web server. This has huge potential for any business that provides software as a service - imagine how easy it could be for users to use your software if they can do it from the comfort of their LLM client!

MCP appears in popular LLM clients such as Visual Studio Code Copilot, though some LLM clients give MCP a different name - such as ChatGPT using “Connectors” instead. Either way, this protocol allows LLM clients to interact with software, enabling so much more functionality and features for users.

In this workshop, we’ll dig into how MCP servers can be developed within back-end web server APIs, such as ExpressJS applications. Throughout the webinar, you will:
- Learn what the Model Context Protocol is and why it’s useful.
- Understand the architecture and design requirements of an MCP server and how it compares to a typical web server or API.
- Explore the use cases for running an MCP server within your APIs or web servers.
- Be able to adapt existing code in a back-end API project to be used by an MCP server.
- See how popular LLM clients can make use of your MCP server locally and remotely.

## The Code

This repository provides two (2) branches.

- The `main` branch, containing the "starter" code for the workshop.
- The `mcp-server` branch, containing example code of an MCP server developed per a typical run of this workshop.

Actual runs of the workshop will vary, leading to varying code outcomes - so don't stress if your code ends up different to what you see in `mcp-server`. That branch is more of a fall-back option, in case no time for coding ends up being available during a workshop.

## Slides

The presentation slides used in the workshop are available in the `./documentation` folder. Specifically, here:

- [`./documentation/slides/2025-09-18-acs.pdf`](./documentation/slides/2025-09-18-acs.pdf)

## Further Resources

The workshop references a whole heap of third-party resources, such as articles, tutorials, documentation, and showcases of businesses or their products. Here's the list:

### Documentation & Reference Pages

- [What is MCP? from Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)
- [Build an MCP Server](https://modelcontextprotocol.io/docs/develop/build-server#node)
- [ChatGPT Developer Mode from OpenAI Platform](https://platform.openai.com/docs/guides/developer-mode)
- [FastMCP for NodeJS, NPM Package by punkpeye](https://github.com/punkpeye/fastmcp)
- [FastMCP for Python, PyPi Package by jlowin](https://github.com/jlowin/fastmcp)

### Articles, Guides & Tutorials

- [Stop Generating MCP Servers from REST APIs! by Kyle Stratis, 7th September 2025](https://thesignalpath.xyz/stop-generating-mcp-servers-from-rest-apis/)
- [Building an MCP Server with FastMCP: A Hands-On Demo by Alessandro Garavaglia, 10th September 2025](https://medium.com/@ale.garavaglia/building-an-mcp-server-with-fastmcp-a-hands-on-demo-98208c5370df)
- [How to Build MCP Servers with FastMCP: Step-by-Step Tutorial for Beginners by Pedro Aquino, 2nd January 2025](https://medium.com/@pedro.aquino.se/how-to-build-mcp-servers-with-fastmcp-step-by-step-tutorial-for-beginners-0a6ddd1d3f95)
- [A Guide to Translating API -> MCP by ImaginationInFocus, 25th July 2025](https://www.reddit.com/r/mcp/comments/1m8ro91/a_guide_to_translating_api_mcp/)
- [How to Build Your First MCP Server and Publish on NPM by Vivek Chavan, 8th May 2025](https://medium.com/@vivek888chavan/how-to-build-your-first-mcp-server-and-publish-on-npm-6b9df8264421)
- [Awesome MCP Security repository on GitHub](https://github.com/Puliczek/awesome-mcp-security)

### MCP servers to learn from or use:

- [Docker Hub's MCP Hub](https://hub.docker.com/mcp)
- [mcp-containers](https://github.com/metorial/mcp-containers)
- [PayPal MCP Server Quickstart](https://www.paypal.ai/docs/tools/mcp-quickstart)