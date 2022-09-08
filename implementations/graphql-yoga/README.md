# GraphQL over HTTP audit report

- **72** audits in total
- **72** pass

## Passing
1. ✅ SHOULD accept application/graphql-response+json and match the content-type
2. ✅ MUST accept application/json and match the content-type
3. ✅ SHOULD accept */* and use application/graphql-response+json for the content-type
4. ✅ SHOULD assume application/graphql-response+json content-type when accept is missing
5. ✅ MUST use utf-8 encoding when responding
6. ✅ MUST accept only utf-8 charset
7. ✅ MUST accept POST requests
8. ✅ MAY accept application/x-www-form-urlencoded formatted GET requests
9. ✅ MUST NOT allow executing mutations on GET requests
10. ✅ SHOULD respond with 4xx status code if content-type is not supplied on POST requests
11. ✅ MUST accept application/json POST requests
12. ✅ MUST require a request body on POST
13. ✅ SHOULD use 400 status code on missing {query} parameter when accepting application/graphql-response+json
14. ✅ SHOULD use 200 status code with errors field on missing {query} parameter when accepting application/json
15. ✅ SHOULD use 400 status code on object {query} parameter when accepting application/graphql-response+json
16. ✅ SHOULD use 400 status code on number {query} parameter when accepting application/graphql-response+json
17. ✅ SHOULD use 400 status code on boolean {query} parameter when accepting application/graphql-response+json
18. ✅ SHOULD use 400 status code on array {query} parameter when accepting application/graphql-response+json
19. ✅ SHOULD use 200 status code with errors field on object {query} parameter when accepting application/json
20. ✅ SHOULD use 200 status code with errors field on number {query} parameter when accepting application/json
21. ✅ SHOULD use 200 status code with errors field on boolean {query} parameter when accepting application/json
22. ✅ SHOULD use 200 status code with errors field on array {query} parameter when accepting application/json
23. ✅ SHOULD allow string {query} parameter when accepting application/graphql-response+json
24. ✅ MUST allow string {query} parameter when accepting application/json
25. ✅ SHOULD use 400 status code on object {operationName} parameter when accepting application/graphql-response+json
26. ✅ SHOULD use 400 status code on number {operationName} parameter when accepting application/graphql-response+json
27. ✅ SHOULD use 400 status code on boolean {operationName} parameter when accepting application/graphql-response+json
28. ✅ SHOULD use 400 status code on array {operationName} parameter when accepting application/graphql-response+json
29. ✅ SHOULD use 200 status code with errors field on object {operationName} parameter when accepting application/json
30. ✅ SHOULD use 200 status code with errors field on number {operationName} parameter when accepting application/json
31. ✅ SHOULD use 200 status code with errors field on boolean {operationName} parameter when accepting application/json
32. ✅ SHOULD use 200 status code with errors field on array {operationName} parameter when accepting application/json
33. ✅ SHOULD allow string {operationName} parameter when accepting application/graphql-response+json
34. ✅ MUST allow string {operationName} parameter when accepting application/json
35. ✅ SHOULD use 400 status code on string {variables} parameter when accepting application/graphql-response+json
36. ✅ SHOULD use 400 status code on number {variables} parameter when accepting application/graphql-response+json
37. ✅ SHOULD use 400 status code on boolean {variables} parameter when accepting application/graphql-response+json
38. ✅ SHOULD use 400 status code on array {variables} parameter when accepting application/graphql-response+json
39. ✅ SHOULD use 200 status code with errors field on string {variables} parameter when accepting application/json
40. ✅ SHOULD use 200 status code with errors field on number {variables} parameter when accepting application/json
41. ✅ SHOULD use 200 status code with errors field on boolean {variables} parameter when accepting application/json
42. ✅ SHOULD use 200 status code with errors field on array {variables} parameter when accepting application/json
43. ✅ SHOULD allow map {variables} parameter when accepting application/graphql-response+json
44. ✅ MUST allow map {variables} parameter when accepting application/json
45. ✅ SHOULD allow URL-encoded JSON string {variables} parameter in GETs when accepting application/graphql-response+json
46. ✅ MUST allow URL-encoded JSON string {variables} parameter in GETs when accepting application/json
47. ✅ SHOULD use 400 status code on string {extensions} parameter when accepting application/graphql-response+json
48. ✅ SHOULD use 400 status code on number {extensions} parameter when accepting application/graphql-response+json
49. ✅ SHOULD use 400 status code on boolean {extensions} parameter when accepting application/graphql-response+json
50. ✅ SHOULD use 400 status code on array {extensions} parameter when accepting application/graphql-response+json
51. ✅ SHOULD use 200 status code with errors field on string {extensions} parameter when accepting application/json
52. ✅ SHOULD use 200 status code with errors field on number {extensions} parameter when accepting application/json
53. ✅ SHOULD use 200 status code with errors field on boolean {extensions} parameter when accepting application/json
54. ✅ SHOULD use 200 status code with errors field on array {extensions} parameter when accepting application/json
55. ✅ SHOULD allow map {extensions} parameter when accepting application/graphql-response+json
56. ✅ MUST allow map {extensions} parameter when accepting application/json
57. ✅ SHOULD use 200 status code on JSON parsing failure when accepting application/json
58. ✅ SHOULD use 200 status code if parameters are invalid when accepting application/json
59. ✅ SHOULD use 200 status code on document parsing failure when accepting application/json
60. ✅ SHOULD use 200 status code on document validation failure when accepting application/json
61. ✅ SHOULD use 4xx or 5xx status codes on JSON parsing failure when accepting application/graphql-response+json
62. ✅ SHOULD use 400 status code on JSON parsing failure when accepting application/graphql-response+json
63. ✅ SHOULD not contain the data entry on JSON parsing failure when accepting application/graphql-response+json
64. ✅ SHOULD use 4xx or 5xx status codes if parameters are invalid when accepting application/graphql-response+json
65. ✅ SHOULD use 400 status code if parameters are invalid when accepting application/graphql-response+json
66. ✅ SHOULD not contain the data entry if parameters are invalid when accepting application/graphql-response+json
67. ✅ SHOULD use 4xx or 5xx status codes on document parsing failure when accepting application/graphql-response+json
68. ✅ SHOULD use 400 status code on document parsing failure when accepting application/graphql-response+json
69. ✅ SHOULD not contain the data entry on document parsing failure when accepting application/graphql-response+json
70. ✅ SHOULD use 4xx or 5xx status codes on document validation failure when accepting application/graphql-response+json
71. ✅ SHOULD use 400 status code on document validation failure when accepting application/graphql-response+json
72. ✅ SHOULD not contain the data entry on document validation failure when accepting application/graphql-response+json

