"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit-parents@6.0.1";
exports.ids = ["vendor-chunks/unist-util-visit-parents@6.0.1"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/color.node.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/color.node.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   color: () => (/* binding */ color)\n/* harmony export */ });\n/**\n * @param {string} d\n * @returns {string}\n */\nfunction color(d) {\n  return '\\u001B[33m' + d + '\\u001B[39m'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzQDYuMC4xL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvbGliL2NvbG9yLm5vZGUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcmZvbGlvLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50c0A2LjAuMS9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2xpYi9jb2xvci5ub2RlLmpzP2Q5ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yKGQpIHtcbiAgcmV0dXJuICdcXHUwMDFCWzMzbScgKyBkICsgJ1xcdTAwMUJbMzltJ1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/color.node.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/index.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTINUE: () => (/* binding */ CONTINUE),\n/* harmony export */   EXIT: () => (/* binding */ EXIT),\n/* harmony export */   SKIP: () => (/* binding */ SKIP),\n/* harmony export */   visitParents: () => (/* binding */ visitParents)\n/* harmony export */ });\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ \"(rsc)/./node_modules/.pnpm/unist-util-is@6.0.0/node_modules/unist-util-is/lib/index.js\");\n/* harmony import */ var unist_util_visit_parents_do_not_use_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-visit-parents/do-not-use-color */ \"(rsc)/./node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/color.node.js\");\n/**\n * @typedef {import('unist').Node} UnistNode\n * @typedef {import('unist').Parent} UnistParent\n */\n\n/**\n * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test\n *   Test from `unist-util-is`.\n *\n *   Note: we have remove and add `undefined`, because otherwise when generating\n *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,\n *   which doesn’t work when publishing on npm.\n */\n\n/**\n * @typedef {(\n *   Fn extends (value: any) => value is infer Thing\n *   ? Thing\n *   : Fallback\n * )} Predicate\n *   Get the value of a type guard `Fn`.\n * @template Fn\n *   Value; typically function that is a type guard (such as `(x): x is Y`).\n * @template Fallback\n *   Value to yield if `Fn` is not a type guard.\n */\n\n/**\n * @typedef {(\n *   Check extends null | undefined // No test.\n *   ? Value\n *   : Value extends {type: Check} // String (type) test.\n *   ? Value\n *   : Value extends Check // Partial test.\n *   ? Value\n *   : Check extends Function // Function test.\n *   ? Predicate<Check, Value> extends Value\n *     ? Predicate<Check, Value>\n *     : never\n *   : never // Some other test?\n * )} MatchesOne\n *   Check whether a node matches a primitive check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test, but not arrays.\n */\n\n/**\n * @typedef {(\n *   Check extends Array<any>\n *   ? MatchesOne<Value, Check[keyof Check]>\n *   : MatchesOne<Value, Check>\n * )} Matches\n *   Check whether a node matches a check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test.\n */\n\n/**\n * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint\n *   Number; capped reasonably.\n */\n\n/**\n * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment\n *   Increment a number in the type system.\n * @template {Uint} [I=0]\n *   Index.\n */\n\n/**\n * @typedef {(\n *   Node extends UnistParent\n *   ? Node extends {children: Array<infer Children>}\n *     ? Child extends Children ? Node : never\n *     : never\n *   : never\n * )} InternalParent\n *   Collect nodes that can be parents of `Child`.\n * @template {UnistNode} Node\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */\n\n/**\n * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent\n *   Collect nodes in `Tree` that can be parents of `Child`.\n * @template {UnistNode} Tree\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */\n\n/**\n * @typedef {(\n *   Depth extends Max\n *   ? never\n *   :\n *     | InternalParent<Node, Child>\n *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>\n * )} InternalAncestor\n *   Collect nodes in `Tree` that can be ancestors of `Child`.\n * @template {UnistNode} Node\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n * @template {Uint} [Max=10]\n *   Max; searches up to this depth.\n * @template {Uint} [Depth=0]\n *   Current depth.\n */\n\n/**\n * @typedef {InternalAncestor<InclusiveDescendant<Tree>, Child>} Ancestor\n *   Collect nodes in `Tree` that can be ancestors of `Child`.\n * @template {UnistNode} Tree\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */\n\n/**\n * @typedef {(\n *   Tree extends UnistParent\n *     ? Depth extends Max\n *       ? Tree\n *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>\n *     : Tree\n * )} InclusiveDescendant\n *   Collect all (inclusive) descendants of `Tree`.\n *\n *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to\n *   > recurse without actually running into an infinite loop, which the\n *   > previous version did.\n *   >\n *   > Practically, a max of `2` is typically enough assuming a `Root` is\n *   > passed, but it doesn’t improve performance.\n *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.\n *   > Using up to `10` doesn’t hurt or help either.\n * @template {UnistNode} Tree\n *   Tree type.\n * @template {Uint} [Max=10]\n *   Max; searches up to this depth.\n * @template {Uint} [Depth=0]\n *   Current depth.\n */\n\n/**\n * @typedef {'skip' | boolean} Action\n *   Union of the action types.\n *\n * @typedef {number} Index\n *   Move to the sibling at `index` next (after node itself is completely\n *   traversed).\n *\n *   Useful if mutating the tree, such as removing the node the visitor is\n *   currently on, or any of its previous siblings.\n *   Results less than 0 or greater than or equal to `children.length` stop\n *   traversing the parent.\n *\n * @typedef {[(Action | null | undefined | void)?, (Index | null | undefined)?]} ActionTuple\n *   List with one or two values, the first an action, the second an index.\n *\n * @typedef {Action | ActionTuple | Index | null | undefined | void} VisitorResult\n *   Any value that can be returned from a visitor.\n */\n\n/**\n * @callback Visitor\n *   Handle a node (matching `test`, if given).\n *\n *   Visitors are free to transform `node`.\n *   They can also transform the parent of node (the last of `ancestors`).\n *\n *   Replacing `node` itself, if `SKIP` is not returned, still causes its\n *   descendants to be walked (which is a bug).\n *\n *   When adding or removing previous siblings of `node` (or next siblings, in\n *   case of reverse), the `Visitor` should return a new `Index` to specify the\n *   sibling to traverse after `node` is traversed.\n *   Adding or removing next siblings of `node` (or previous siblings, in case\n *   of reverse) is handled as expected without needing to return a new `Index`.\n *\n *   Removing the children property of an ancestor still results in them being\n *   traversed.\n * @param {Visited} node\n *   Found node.\n * @param {Array<VisitedParents>} ancestors\n *   Ancestors of `node`.\n * @returns {VisitorResult}\n *   What to do next.\n *\n *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.\n *   An `Action` is treated as a tuple of `[Action]`.\n *\n *   Passing a tuple back only makes sense if the `Action` is `SKIP`.\n *   When the `Action` is `EXIT`, that action can be returned.\n *   When the `Action` is `CONTINUE`, `Index` can be returned.\n * @template {UnistNode} [Visited=UnistNode]\n *   Visited node type.\n * @template {UnistParent} [VisitedParents=UnistParent]\n *   Ancestor type.\n */\n\n/**\n * @typedef {Visitor<Matches<InclusiveDescendant<Tree>, Check>, Ancestor<Tree, Matches<InclusiveDescendant<Tree>, Check>>>} BuildVisitor\n *   Build a typed `Visitor` function from a tree and a test.\n *\n *   It will infer which values are passed as `node` and which as `parents`.\n * @template {UnistNode} [Tree=UnistNode]\n *   Tree type.\n * @template {Test} [Check=Test]\n *   Test type.\n */\n\n\n\n\n/** @type {Readonly<ActionTuple>} */\nconst empty = []\n\n/**\n * Continue traversing as normal.\n */\nconst CONTINUE = true\n\n/**\n * Stop traversing immediately.\n */\nconst EXIT = false\n\n/**\n * Do not traverse this node’s children.\n */\nconst SKIP = 'skip'\n\n/**\n * Visit nodes, with ancestral information.\n *\n * This algorithm performs *depth-first* *tree traversal* in *preorder*\n * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).\n *\n * You can choose for which nodes `visitor` is called by passing a `test`.\n * For complex tests, you should test yourself in `visitor`, as it will be\n * faster and will have improved type information.\n *\n * Walking the tree is an intensive task.\n * Make use of the return values of the visitor when possible.\n * Instead of walking a tree multiple times, walk it once, use `unist-util-is`\n * to check if a node matches, and then perform different operations.\n *\n * You can change the tree.\n * See `Visitor` for more info.\n *\n * @overload\n * @param {Tree} tree\n * @param {Check} check\n * @param {BuildVisitor<Tree, Check>} visitor\n * @param {boolean | null | undefined} [reverse]\n * @returns {undefined}\n *\n * @overload\n * @param {Tree} tree\n * @param {BuildVisitor<Tree>} visitor\n * @param {boolean | null | undefined} [reverse]\n * @returns {undefined}\n *\n * @param {UnistNode} tree\n *   Tree to traverse.\n * @param {Visitor | Test} test\n *   `unist-util-is`-compatible test\n * @param {Visitor | boolean | null | undefined} [visitor]\n *   Handle each node.\n * @param {boolean | null | undefined} [reverse]\n *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).\n * @returns {undefined}\n *   Nothing.\n *\n * @template {UnistNode} Tree\n *   Node type.\n * @template {Test} Check\n *   `unist-util-is`-compatible test.\n */\nfunction visitParents(tree, test, visitor, reverse) {\n  /** @type {Test} */\n  let check\n\n  if (typeof test === 'function' && typeof visitor !== 'function') {\n    reverse = visitor\n    // @ts-expect-error no visitor given, so `visitor` is test.\n    visitor = test\n  } else {\n    // @ts-expect-error visitor given, so `test` isn’t a visitor.\n    check = test\n  }\n\n  const is = (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)(check)\n  const step = reverse ? -1 : 1\n\n  factory(tree, undefined, [])()\n\n  /**\n   * @param {UnistNode} node\n   * @param {number | undefined} index\n   * @param {Array<UnistParent>} parents\n   */\n  function factory(node, index, parents) {\n    const value = /** @type {Record<string, unknown>} */ (\n      node && typeof node === 'object' ? node : {}\n    )\n\n    if (typeof value.type === 'string') {\n      const name =\n        // `hast`\n        typeof value.tagName === 'string'\n          ? value.tagName\n          : // `xast`\n          typeof value.name === 'string'\n          ? value.name\n          : undefined\n\n      Object.defineProperty(visit, 'name', {\n        value:\n          'node (' + (0,unist_util_visit_parents_do_not_use_color__WEBPACK_IMPORTED_MODULE_1__.color)(node.type + (name ? '<' + name + '>' : '')) + ')'\n      })\n    }\n\n    return visit\n\n    function visit() {\n      /** @type {Readonly<ActionTuple>} */\n      let result = empty\n      /** @type {Readonly<ActionTuple>} */\n      let subresult\n      /** @type {number} */\n      let offset\n      /** @type {Array<UnistParent>} */\n      let grandparents\n\n      if (!test || is(node, index, parents[parents.length - 1] || undefined)) {\n        // @ts-expect-error: `visitor` is now a visitor.\n        result = toResult(visitor(node, parents))\n\n        if (result[0] === EXIT) {\n          return result\n        }\n      }\n\n      if ('children' in node && node.children) {\n        const nodeAsParent = /** @type {UnistParent} */ (node)\n\n        if (nodeAsParent.children && result[0] !== SKIP) {\n          offset = (reverse ? nodeAsParent.children.length : -1) + step\n          grandparents = parents.concat(nodeAsParent)\n\n          while (offset > -1 && offset < nodeAsParent.children.length) {\n            const child = nodeAsParent.children[offset]\n\n            subresult = factory(child, offset, grandparents)()\n\n            if (subresult[0] === EXIT) {\n              return subresult\n            }\n\n            offset =\n              typeof subresult[1] === 'number' ? subresult[1] : offset + step\n          }\n        }\n      }\n\n      return result\n    }\n  }\n}\n\n/**\n * Turn a return value into a clean result.\n *\n * @param {VisitorResult} value\n *   Valid return values from visitors.\n * @returns {Readonly<ActionTuple>}\n *   Clean result.\n */\nfunction toResult(value) {\n  if (Array.isArray(value)) {\n    return value\n  }\n\n  if (typeof value === 'number') {\n    return [CONTINUE, value]\n  }\n\n  return value === null || value === undefined ? empty : [value]\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzQDYuMC4xL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSx3QkFBd0I7QUFDckM7O0FBRUE7QUFDQSxhQUFhLDhEQUE4RDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxhQUFhLDRDQUE0QztBQUN6RCxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhLHNLQUFzSztBQUNuTDtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBOztBQUVBO0FBQ0EsYUFBYSxrREFBa0Q7QUFDL0Q7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsY0FBYyxXQUFXO0FBQ3pC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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcmZvbGlvLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50c0A2LjAuMS9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2xpYi9pbmRleC5qcz9iZjczIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Ob2RlfSBVbmlzdE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUGFyZW50fSBVbmlzdFBhcmVudFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0V4Y2x1ZGU8aW1wb3J0KCd1bmlzdC11dGlsLWlzJykuVGVzdCwgdW5kZWZpbmVkPiB8IHVuZGVmaW5lZH0gVGVzdFxuICogICBUZXN0IGZyb20gYHVuaXN0LXV0aWwtaXNgLlxuICpcbiAqICAgTm90ZTogd2UgaGF2ZSByZW1vdmUgYW5kIGFkZCBgdW5kZWZpbmVkYCwgYmVjYXVzZSBvdGhlcndpc2Ugd2hlbiBnZW5lcmF0aW5nXG4gKiAgIGF1dG9tYXRpYyBgLmQudHNgIGZpbGVzLCBUUyB0cmllcyB0byBmbGF0dGVuIHBhdGhzIGZyb20gYSBsb2NhbCBwZXJzcGVjdGl2ZSxcbiAqICAgd2hpY2ggZG9lc27igJl0IHdvcmsgd2hlbiBwdWJsaXNoaW5nIG9uIG5wbS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIEZuIGV4dGVuZHMgKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIGluZmVyIFRoaW5nXG4gKiAgID8gVGhpbmdcbiAqICAgOiBGYWxsYmFja1xuICogKX0gUHJlZGljYXRlXG4gKiAgIEdldCB0aGUgdmFsdWUgb2YgYSB0eXBlIGd1YXJkIGBGbmAuXG4gKiBAdGVtcGxhdGUgRm5cbiAqICAgVmFsdWU7IHR5cGljYWxseSBmdW5jdGlvbiB0aGF0IGlzIGEgdHlwZSBndWFyZCAoc3VjaCBhcyBgKHgpOiB4IGlzIFlgKS5cbiAqIEB0ZW1wbGF0ZSBGYWxsYmFja1xuICogICBWYWx1ZSB0byB5aWVsZCBpZiBgRm5gIGlzIG5vdCBhIHR5cGUgZ3VhcmQuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBDaGVjayBleHRlbmRzIG51bGwgfCB1bmRlZmluZWQgLy8gTm8gdGVzdC5cbiAqICAgPyBWYWx1ZVxuICogICA6IFZhbHVlIGV4dGVuZHMge3R5cGU6IENoZWNrfSAvLyBTdHJpbmcgKHR5cGUpIHRlc3QuXG4gKiAgID8gVmFsdWVcbiAqICAgOiBWYWx1ZSBleHRlbmRzIENoZWNrIC8vIFBhcnRpYWwgdGVzdC5cbiAqICAgPyBWYWx1ZVxuICogICA6IENoZWNrIGV4dGVuZHMgRnVuY3Rpb24gLy8gRnVuY3Rpb24gdGVzdC5cbiAqICAgPyBQcmVkaWNhdGU8Q2hlY2ssIFZhbHVlPiBleHRlbmRzIFZhbHVlXG4gKiAgICAgPyBQcmVkaWNhdGU8Q2hlY2ssIFZhbHVlPlxuICogICAgIDogbmV2ZXJcbiAqICAgOiBuZXZlciAvLyBTb21lIG90aGVyIHRlc3Q/XG4gKiApfSBNYXRjaGVzT25lXG4gKiAgIENoZWNrIHdoZXRoZXIgYSBub2RlIG1hdGNoZXMgYSBwcmltaXRpdmUgY2hlY2sgaW4gdGhlIHR5cGUgc3lzdGVtLlxuICogQHRlbXBsYXRlIFZhbHVlXG4gKiAgIFZhbHVlOyB0eXBpY2FsbHkgdW5pc3QgYE5vZGVgLlxuICogQHRlbXBsYXRlIENoZWNrXG4gKiAgIFZhbHVlOyB0eXBpY2FsbHkgYHVuaXN0LXV0aWwtaXNgLWNvbXBhdGlibGUgdGVzdCwgYnV0IG5vdCBhcnJheXMuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBDaGVjayBleHRlbmRzIEFycmF5PGFueT5cbiAqICAgPyBNYXRjaGVzT25lPFZhbHVlLCBDaGVja1trZXlvZiBDaGVja10+XG4gKiAgIDogTWF0Y2hlc09uZTxWYWx1ZSwgQ2hlY2s+XG4gKiApfSBNYXRjaGVzXG4gKiAgIENoZWNrIHdoZXRoZXIgYSBub2RlIG1hdGNoZXMgYSBjaGVjayBpbiB0aGUgdHlwZSBzeXN0ZW0uXG4gKiBAdGVtcGxhdGUgVmFsdWVcbiAqICAgVmFsdWU7IHR5cGljYWxseSB1bmlzdCBgTm9kZWAuXG4gKiBAdGVtcGxhdGUgQ2hlY2tcbiAqICAgVmFsdWU7IHR5cGljYWxseSBgdW5pc3QtdXRpbC1pc2AtY29tcGF0aWJsZSB0ZXN0LlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgezAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMH0gVWludFxuICogICBOdW1iZXI7IGNhcHBlZCByZWFzb25hYmx5LlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0kgZXh0ZW5kcyAwID8gMSA6IEkgZXh0ZW5kcyAxID8gMiA6IEkgZXh0ZW5kcyAyID8gMyA6IEkgZXh0ZW5kcyAzID8gNCA6IEkgZXh0ZW5kcyA0ID8gNSA6IEkgZXh0ZW5kcyA1ID8gNiA6IEkgZXh0ZW5kcyA2ID8gNyA6IEkgZXh0ZW5kcyA3ID8gOCA6IEkgZXh0ZW5kcyA4ID8gOSA6IDEwfSBJbmNyZW1lbnRcbiAqICAgSW5jcmVtZW50IGEgbnVtYmVyIGluIHRoZSB0eXBlIHN5c3RlbS5cbiAqIEB0ZW1wbGF0ZSB7VWludH0gW0k9MF1cbiAqICAgSW5kZXguXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBOb2RlIGV4dGVuZHMgVW5pc3RQYXJlbnRcbiAqICAgPyBOb2RlIGV4dGVuZHMge2NoaWxkcmVuOiBBcnJheTxpbmZlciBDaGlsZHJlbj59XG4gKiAgICAgPyBDaGlsZCBleHRlbmRzIENoaWxkcmVuID8gTm9kZSA6IG5ldmVyXG4gKiAgICAgOiBuZXZlclxuICogICA6IG5ldmVyXG4gKiApfSBJbnRlcm5hbFBhcmVudFxuICogICBDb2xsZWN0IG5vZGVzIHRoYXQgY2FuIGJlIHBhcmVudHMgb2YgYENoaWxkYC5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBOb2RlXG4gKiAgIEFsbCBub2RlIHR5cGVzIGluIGEgdHJlZS5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBDaGlsZFxuICogICBOb2RlIHRvIHNlYXJjaCBmb3IuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7SW50ZXJuYWxQYXJlbnQ8SW5jbHVzaXZlRGVzY2VuZGFudDxUcmVlPiwgQ2hpbGQ+fSBQYXJlbnRcbiAqICAgQ29sbGVjdCBub2RlcyBpbiBgVHJlZWAgdGhhdCBjYW4gYmUgcGFyZW50cyBvZiBgQ2hpbGRgLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IFRyZWVcbiAqICAgQWxsIG5vZGUgdHlwZXMgaW4gYSB0cmVlLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IENoaWxkXG4gKiAgIE5vZGUgdG8gc2VhcmNoIGZvci5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIERlcHRoIGV4dGVuZHMgTWF4XG4gKiAgID8gbmV2ZXJcbiAqICAgOlxuICogICAgIHwgSW50ZXJuYWxQYXJlbnQ8Tm9kZSwgQ2hpbGQ+XG4gKiAgICAgfCBJbnRlcm5hbEFuY2VzdG9yPE5vZGUsIEludGVybmFsUGFyZW50PE5vZGUsIENoaWxkPiwgTWF4LCBJbmNyZW1lbnQ8RGVwdGg+PlxuICogKX0gSW50ZXJuYWxBbmNlc3RvclxuICogICBDb2xsZWN0IG5vZGVzIGluIGBUcmVlYCB0aGF0IGNhbiBiZSBhbmNlc3RvcnMgb2YgYENoaWxkYC5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBOb2RlXG4gKiAgIEFsbCBub2RlIHR5cGVzIGluIGEgdHJlZS5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBDaGlsZFxuICogICBOb2RlIHRvIHNlYXJjaCBmb3IuXG4gKiBAdGVtcGxhdGUge1VpbnR9IFtNYXg9MTBdXG4gKiAgIE1heDsgc2VhcmNoZXMgdXAgdG8gdGhpcyBkZXB0aC5cbiAqIEB0ZW1wbGF0ZSB7VWludH0gW0RlcHRoPTBdXG4gKiAgIEN1cnJlbnQgZGVwdGguXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7SW50ZXJuYWxBbmNlc3RvcjxJbmNsdXNpdmVEZXNjZW5kYW50PFRyZWU+LCBDaGlsZD59IEFuY2VzdG9yXG4gKiAgIENvbGxlY3Qgbm9kZXMgaW4gYFRyZWVgIHRoYXQgY2FuIGJlIGFuY2VzdG9ycyBvZiBgQ2hpbGRgLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IFRyZWVcbiAqICAgQWxsIG5vZGUgdHlwZXMgaW4gYSB0cmVlLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IENoaWxkXG4gKiAgIE5vZGUgdG8gc2VhcmNoIGZvci5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIFRyZWUgZXh0ZW5kcyBVbmlzdFBhcmVudFxuICogICAgID8gRGVwdGggZXh0ZW5kcyBNYXhcbiAqICAgICAgID8gVHJlZVxuICogICAgICAgOiBUcmVlIHwgSW5jbHVzaXZlRGVzY2VuZGFudDxUcmVlWydjaGlsZHJlbiddW251bWJlcl0sIE1heCwgSW5jcmVtZW50PERlcHRoPj5cbiAqICAgICA6IFRyZWVcbiAqICl9IEluY2x1c2l2ZURlc2NlbmRhbnRcbiAqICAgQ29sbGVjdCBhbGwgKGluY2x1c2l2ZSkgZGVzY2VuZGFudHMgb2YgYFRyZWVgLlxuICpcbiAqICAgPiDwn5GJICoqTm90ZSoqOiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgdGhpcyBzZWVtcyB0byBiZSB0aGUgZmFzdGVzdCB3YXkgdG9cbiAqICAgPiByZWN1cnNlIHdpdGhvdXQgYWN0dWFsbHkgcnVubmluZyBpbnRvIGFuIGluZmluaXRlIGxvb3AsIHdoaWNoIHRoZVxuICogICA+IHByZXZpb3VzIHZlcnNpb24gZGlkLlxuICogICA+XG4gKiAgID4gUHJhY3RpY2FsbHksIGEgbWF4IG9mIGAyYCBpcyB0eXBpY2FsbHkgZW5vdWdoIGFzc3VtaW5nIGEgYFJvb3RgIGlzXG4gKiAgID4gcGFzc2VkLCBidXQgaXQgZG9lc27igJl0IGltcHJvdmUgcGVyZm9ybWFuY2UuXG4gKiAgID4gSXQgZ2V0cyBoaWdoZXIgd2l0aCBgTGlzdCA+IExpc3RJdGVtID4gVGFibGUgPiBUYWJsZVJvdyA+IFRhYmxlQ2VsbGAuXG4gKiAgID4gVXNpbmcgdXAgdG8gYDEwYCBkb2VzbuKAmXQgaHVydCBvciBoZWxwIGVpdGhlci5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBUcmVlXG4gKiAgIFRyZWUgdHlwZS5cbiAqIEB0ZW1wbGF0ZSB7VWludH0gW01heD0xMF1cbiAqICAgTWF4OyBzZWFyY2hlcyB1cCB0byB0aGlzIGRlcHRoLlxuICogQHRlbXBsYXRlIHtVaW50fSBbRGVwdGg9MF1cbiAqICAgQ3VycmVudCBkZXB0aC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsnc2tpcCcgfCBib29sZWFufSBBY3Rpb25cbiAqICAgVW5pb24gb2YgdGhlIGFjdGlvbiB0eXBlcy5cbiAqXG4gKiBAdHlwZWRlZiB7bnVtYmVyfSBJbmRleFxuICogICBNb3ZlIHRvIHRoZSBzaWJsaW5nIGF0IGBpbmRleGAgbmV4dCAoYWZ0ZXIgbm9kZSBpdHNlbGYgaXMgY29tcGxldGVseVxuICogICB0cmF2ZXJzZWQpLlxuICpcbiAqICAgVXNlZnVsIGlmIG11dGF0aW5nIHRoZSB0cmVlLCBzdWNoIGFzIHJlbW92aW5nIHRoZSBub2RlIHRoZSB2aXNpdG9yIGlzXG4gKiAgIGN1cnJlbnRseSBvbiwgb3IgYW55IG9mIGl0cyBwcmV2aW91cyBzaWJsaW5ncy5cbiAqICAgUmVzdWx0cyBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gYGNoaWxkcmVuLmxlbmd0aGAgc3RvcFxuICogICB0cmF2ZXJzaW5nIHRoZSBwYXJlbnQuXG4gKlxuICogQHR5cGVkZWYge1soQWN0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZCB8IHZvaWQpPywgKEluZGV4IHwgbnVsbCB8IHVuZGVmaW5lZCk/XX0gQWN0aW9uVHVwbGVcbiAqICAgTGlzdCB3aXRoIG9uZSBvciB0d28gdmFsdWVzLCB0aGUgZmlyc3QgYW4gYWN0aW9uLCB0aGUgc2Vjb25kIGFuIGluZGV4LlxuICpcbiAqIEB0eXBlZGVmIHtBY3Rpb24gfCBBY3Rpb25UdXBsZSB8IEluZGV4IHwgbnVsbCB8IHVuZGVmaW5lZCB8IHZvaWR9IFZpc2l0b3JSZXN1bHRcbiAqICAgQW55IHZhbHVlIHRoYXQgY2FuIGJlIHJldHVybmVkIGZyb20gYSB2aXNpdG9yLlxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFZpc2l0b3JcbiAqICAgSGFuZGxlIGEgbm9kZSAobWF0Y2hpbmcgYHRlc3RgLCBpZiBnaXZlbikuXG4gKlxuICogICBWaXNpdG9ycyBhcmUgZnJlZSB0byB0cmFuc2Zvcm0gYG5vZGVgLlxuICogICBUaGV5IGNhbiBhbHNvIHRyYW5zZm9ybSB0aGUgcGFyZW50IG9mIG5vZGUgKHRoZSBsYXN0IG9mIGBhbmNlc3RvcnNgKS5cbiAqXG4gKiAgIFJlcGxhY2luZyBgbm9kZWAgaXRzZWxmLCBpZiBgU0tJUGAgaXMgbm90IHJldHVybmVkLCBzdGlsbCBjYXVzZXMgaXRzXG4gKiAgIGRlc2NlbmRhbnRzIHRvIGJlIHdhbGtlZCAod2hpY2ggaXMgYSBidWcpLlxuICpcbiAqICAgV2hlbiBhZGRpbmcgb3IgcmVtb3ZpbmcgcHJldmlvdXMgc2libGluZ3Mgb2YgYG5vZGVgIChvciBuZXh0IHNpYmxpbmdzLCBpblxuICogICBjYXNlIG9mIHJldmVyc2UpLCB0aGUgYFZpc2l0b3JgIHNob3VsZCByZXR1cm4gYSBuZXcgYEluZGV4YCB0byBzcGVjaWZ5IHRoZVxuICogICBzaWJsaW5nIHRvIHRyYXZlcnNlIGFmdGVyIGBub2RlYCBpcyB0cmF2ZXJzZWQuXG4gKiAgIEFkZGluZyBvciByZW1vdmluZyBuZXh0IHNpYmxpbmdzIG9mIGBub2RlYCAob3IgcHJldmlvdXMgc2libGluZ3MsIGluIGNhc2VcbiAqICAgb2YgcmV2ZXJzZSkgaXMgaGFuZGxlZCBhcyBleHBlY3RlZCB3aXRob3V0IG5lZWRpbmcgdG8gcmV0dXJuIGEgbmV3IGBJbmRleGAuXG4gKlxuICogICBSZW1vdmluZyB0aGUgY2hpbGRyZW4gcHJvcGVydHkgb2YgYW4gYW5jZXN0b3Igc3RpbGwgcmVzdWx0cyBpbiB0aGVtIGJlaW5nXG4gKiAgIHRyYXZlcnNlZC5cbiAqIEBwYXJhbSB7VmlzaXRlZH0gbm9kZVxuICogICBGb3VuZCBub2RlLlxuICogQHBhcmFtIHtBcnJheTxWaXNpdGVkUGFyZW50cz59IGFuY2VzdG9yc1xuICogICBBbmNlc3RvcnMgb2YgYG5vZGVgLlxuICogQHJldHVybnMge1Zpc2l0b3JSZXN1bHR9XG4gKiAgIFdoYXQgdG8gZG8gbmV4dC5cbiAqXG4gKiAgIEFuIGBJbmRleGAgaXMgdHJlYXRlZCBhcyBhIHR1cGxlIG9mIGBbQ09OVElOVUUsIEluZGV4XWAuXG4gKiAgIEFuIGBBY3Rpb25gIGlzIHRyZWF0ZWQgYXMgYSB0dXBsZSBvZiBgW0FjdGlvbl1gLlxuICpcbiAqICAgUGFzc2luZyBhIHR1cGxlIGJhY2sgb25seSBtYWtlcyBzZW5zZSBpZiB0aGUgYEFjdGlvbmAgaXMgYFNLSVBgLlxuICogICBXaGVuIHRoZSBgQWN0aW9uYCBpcyBgRVhJVGAsIHRoYXQgYWN0aW9uIGNhbiBiZSByZXR1cm5lZC5cbiAqICAgV2hlbiB0aGUgYEFjdGlvbmAgaXMgYENPTlRJTlVFYCwgYEluZGV4YCBjYW4gYmUgcmV0dXJuZWQuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gW1Zpc2l0ZWQ9VW5pc3ROb2RlXVxuICogICBWaXNpdGVkIG5vZGUgdHlwZS5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3RQYXJlbnR9IFtWaXNpdGVkUGFyZW50cz1VbmlzdFBhcmVudF1cbiAqICAgQW5jZXN0b3IgdHlwZS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtWaXNpdG9yPE1hdGNoZXM8SW5jbHVzaXZlRGVzY2VuZGFudDxUcmVlPiwgQ2hlY2s+LCBBbmNlc3RvcjxUcmVlLCBNYXRjaGVzPEluY2x1c2l2ZURlc2NlbmRhbnQ8VHJlZT4sIENoZWNrPj4+fSBCdWlsZFZpc2l0b3JcbiAqICAgQnVpbGQgYSB0eXBlZCBgVmlzaXRvcmAgZnVuY3Rpb24gZnJvbSBhIHRyZWUgYW5kIGEgdGVzdC5cbiAqXG4gKiAgIEl0IHdpbGwgaW5mZXIgd2hpY2ggdmFsdWVzIGFyZSBwYXNzZWQgYXMgYG5vZGVgIGFuZCB3aGljaCBhcyBgcGFyZW50c2AuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gW1RyZWU9VW5pc3ROb2RlXVxuICogICBUcmVlIHR5cGUuXG4gKiBAdGVtcGxhdGUge1Rlc3R9IFtDaGVjaz1UZXN0XVxuICogICBUZXN0IHR5cGUuXG4gKi9cblxuaW1wb3J0IHtjb252ZXJ0fSBmcm9tICd1bmlzdC11dGlsLWlzJ1xuaW1wb3J0IHtjb2xvcn0gZnJvbSAndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2RvLW5vdC11c2UtY29sb3InXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8QWN0aW9uVHVwbGU+fSAqL1xuY29uc3QgZW1wdHkgPSBbXVxuXG4vKipcbiAqIENvbnRpbnVlIHRyYXZlcnNpbmcgYXMgbm9ybWFsLlxuICovXG5leHBvcnQgY29uc3QgQ09OVElOVUUgPSB0cnVlXG5cbi8qKlxuICogU3RvcCB0cmF2ZXJzaW5nIGltbWVkaWF0ZWx5LlxuICovXG5leHBvcnQgY29uc3QgRVhJVCA9IGZhbHNlXG5cbi8qKlxuICogRG8gbm90IHRyYXZlcnNlIHRoaXMgbm9kZeKAmXMgY2hpbGRyZW4uXG4gKi9cbmV4cG9ydCBjb25zdCBTS0lQID0gJ3NraXAnXG5cbi8qKlxuICogVmlzaXQgbm9kZXMsIHdpdGggYW5jZXN0cmFsIGluZm9ybWF0aW9uLlxuICpcbiAqIFRoaXMgYWxnb3JpdGhtIHBlcmZvcm1zICpkZXB0aC1maXJzdCogKnRyZWUgdHJhdmVyc2FsKiBpbiAqcHJlb3JkZXIqXG4gKiAoKipOTFIqKikgb3IgaWYgYHJldmVyc2VgIGlzIGdpdmVuLCBpbiAqcmV2ZXJzZSBwcmVvcmRlciogKCoqTlJMKiopLlxuICpcbiAqIFlvdSBjYW4gY2hvb3NlIGZvciB3aGljaCBub2RlcyBgdmlzaXRvcmAgaXMgY2FsbGVkIGJ5IHBhc3NpbmcgYSBgdGVzdGAuXG4gKiBGb3IgY29tcGxleCB0ZXN0cywgeW91IHNob3VsZCB0ZXN0IHlvdXJzZWxmIGluIGB2aXNpdG9yYCwgYXMgaXQgd2lsbCBiZVxuICogZmFzdGVyIGFuZCB3aWxsIGhhdmUgaW1wcm92ZWQgdHlwZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBXYWxraW5nIHRoZSB0cmVlIGlzIGFuIGludGVuc2l2ZSB0YXNrLlxuICogTWFrZSB1c2Ugb2YgdGhlIHJldHVybiB2YWx1ZXMgb2YgdGhlIHZpc2l0b3Igd2hlbiBwb3NzaWJsZS5cbiAqIEluc3RlYWQgb2Ygd2Fsa2luZyBhIHRyZWUgbXVsdGlwbGUgdGltZXMsIHdhbGsgaXQgb25jZSwgdXNlIGB1bmlzdC11dGlsLWlzYFxuICogdG8gY2hlY2sgaWYgYSBub2RlIG1hdGNoZXMsIGFuZCB0aGVuIHBlcmZvcm0gZGlmZmVyZW50IG9wZXJhdGlvbnMuXG4gKlxuICogWW91IGNhbiBjaGFuZ2UgdGhlIHRyZWUuXG4gKiBTZWUgYFZpc2l0b3JgIGZvciBtb3JlIGluZm8uXG4gKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0ge1RyZWV9IHRyZWVcbiAqIEBwYXJhbSB7Q2hlY2t9IGNoZWNrXG4gKiBAcGFyYW0ge0J1aWxkVmlzaXRvcjxUcmVlLCBDaGVjaz59IHZpc2l0b3JcbiAqIEBwYXJhbSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtyZXZlcnNlXVxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSB7VHJlZX0gdHJlZVxuICogQHBhcmFtIHtCdWlsZFZpc2l0b3I8VHJlZT59IHZpc2l0b3JcbiAqIEBwYXJhbSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtyZXZlcnNlXVxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqXG4gKiBAcGFyYW0ge1VuaXN0Tm9kZX0gdHJlZVxuICogICBUcmVlIHRvIHRyYXZlcnNlLlxuICogQHBhcmFtIHtWaXNpdG9yIHwgVGVzdH0gdGVzdFxuICogICBgdW5pc3QtdXRpbC1pc2AtY29tcGF0aWJsZSB0ZXN0XG4gKiBAcGFyYW0ge1Zpc2l0b3IgfCBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Zpc2l0b3JdXG4gKiAgIEhhbmRsZSBlYWNoIG5vZGUuXG4gKiBAcGFyYW0ge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbcmV2ZXJzZV1cbiAqICAgVHJhdmVyc2UgaW4gcmV2ZXJzZSBwcmVvcmRlciAoTlJMKSBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHByZW9yZGVyIChOTFIpLlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqICAgTm90aGluZy5cbiAqXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gVHJlZVxuICogICBOb2RlIHR5cGUuXG4gKiBAdGVtcGxhdGUge1Rlc3R9IENoZWNrXG4gKiAgIGB1bmlzdC11dGlsLWlzYC1jb21wYXRpYmxlIHRlc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICAvKiogQHR5cGUge1Rlc3R9ICovXG4gIGxldCBjaGVja1xuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBubyB2aXNpdG9yIGdpdmVuLCBzbyBgdmlzaXRvcmAgaXMgdGVzdC5cbiAgICB2aXNpdG9yID0gdGVzdFxuICB9IGVsc2Uge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdmlzaXRvciBnaXZlbiwgc28gYHRlc3RgIGlzbuKAmXQgYSB2aXNpdG9yLlxuICAgIGNoZWNrID0gdGVzdFxuICB9XG5cbiAgY29uc3QgaXMgPSBjb252ZXJ0KGNoZWNrKVxuICBjb25zdCBzdGVwID0gcmV2ZXJzZSA/IC0xIDogMVxuXG4gIGZhY3RvcnkodHJlZSwgdW5kZWZpbmVkLCBbXSkoKVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1VuaXN0Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge251bWJlciB8IHVuZGVmaW5lZH0gaW5kZXhcbiAgICogQHBhcmFtIHtBcnJheTxVbmlzdFBhcmVudD59IHBhcmVudHNcbiAgICovXG4gIGZ1bmN0aW9uIGZhY3Rvcnkobm9kZSwgaW5kZXgsIHBhcmVudHMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59ICovIChcbiAgICAgIG5vZGUgJiYgdHlwZW9mIG5vZGUgPT09ICdvYmplY3QnID8gbm9kZSA6IHt9XG4gICAgKVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgbmFtZSA9XG4gICAgICAgIC8vIGBoYXN0YFxuICAgICAgICB0eXBlb2YgdmFsdWUudGFnTmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IHZhbHVlLnRhZ05hbWVcbiAgICAgICAgICA6IC8vIGB4YXN0YFxuICAgICAgICAgIHR5cGVvZiB2YWx1ZS5uYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gdmFsdWUubmFtZVxuICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2aXNpdCwgJ25hbWUnLCB7XG4gICAgICAgIHZhbHVlOlxuICAgICAgICAgICdub2RlICgnICsgY29sb3Iobm9kZS50eXBlICsgKG5hbWUgPyAnPCcgKyBuYW1lICsgJz4nIDogJycpKSArICcpJ1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRcblxuICAgIGZ1bmN0aW9uIHZpc2l0KCkge1xuICAgICAgLyoqIEB0eXBlIHtSZWFkb25seTxBY3Rpb25UdXBsZT59ICovXG4gICAgICBsZXQgcmVzdWx0ID0gZW1wdHlcbiAgICAgIC8qKiBAdHlwZSB7UmVhZG9ubHk8QWN0aW9uVHVwbGU+fSAqL1xuICAgICAgbGV0IHN1YnJlc3VsdFxuICAgICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICAgICBsZXQgb2Zmc2V0XG4gICAgICAvKiogQHR5cGUge0FycmF5PFVuaXN0UGFyZW50Pn0gKi9cbiAgICAgIGxldCBncmFuZHBhcmVudHNcblxuICAgICAgaWYgKCF0ZXN0IHx8IGlzKG5vZGUsIGluZGV4LCBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV0gfHwgdW5kZWZpbmVkKSkge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBgdmlzaXRvcmAgaXMgbm93IGEgdmlzaXRvci5cbiAgICAgICAgcmVzdWx0ID0gdG9SZXN1bHQodmlzaXRvcihub2RlLCBwYXJlbnRzKSlcblxuICAgICAgICBpZiAocmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgnY2hpbGRyZW4nIGluIG5vZGUgJiYgbm9kZS5jaGlsZHJlbikge1xuICAgICAgICBjb25zdCBub2RlQXNQYXJlbnQgPSAvKiogQHR5cGUge1VuaXN0UGFyZW50fSAqLyAobm9kZSlcblxuICAgICAgICBpZiAobm9kZUFzUGFyZW50LmNoaWxkcmVuICYmIHJlc3VsdFswXSAhPT0gU0tJUCkge1xuICAgICAgICAgIG9mZnNldCA9IChyZXZlcnNlID8gbm9kZUFzUGFyZW50LmNoaWxkcmVuLmxlbmd0aCA6IC0xKSArIHN0ZXBcbiAgICAgICAgICBncmFuZHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChub2RlQXNQYXJlbnQpXG5cbiAgICAgICAgICB3aGlsZSAob2Zmc2V0ID4gLTEgJiYgb2Zmc2V0IDwgbm9kZUFzUGFyZW50LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlQXNQYXJlbnQuY2hpbGRyZW5bb2Zmc2V0XVxuXG4gICAgICAgICAgICBzdWJyZXN1bHQgPSBmYWN0b3J5KGNoaWxkLCBvZmZzZXQsIGdyYW5kcGFyZW50cykoKVxuXG4gICAgICAgICAgICBpZiAoc3VicmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdWJyZXN1bHRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2Zmc2V0ID1cbiAgICAgICAgICAgICAgdHlwZW9mIHN1YnJlc3VsdFsxXSA9PT0gJ251bWJlcicgPyBzdWJyZXN1bHRbMV0gOiBvZmZzZXQgKyBzdGVwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUdXJuIGEgcmV0dXJuIHZhbHVlIGludG8gYSBjbGVhbiByZXN1bHQuXG4gKlxuICogQHBhcmFtIHtWaXNpdG9yUmVzdWx0fSB2YWx1ZVxuICogICBWYWxpZCByZXR1cm4gdmFsdWVzIGZyb20gdmlzaXRvcnMuXG4gKiBAcmV0dXJucyB7UmVhZG9ubHk8QWN0aW9uVHVwbGU+fVxuICogICBDbGVhbiByZXN1bHQuXG4gKi9cbmZ1bmN0aW9uIHRvUmVzdWx0KHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gW0NPTlRJTlVFLCB2YWx1ZV1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZW1wdHkgOiBbdmFsdWVdXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/index.js\n");

/***/ })

};
;