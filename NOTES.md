# React Patterns Made Simple (by Adrian Hajdin)

Solutions: https://github.com/JavaScript-Mastery-Pro/react-patterns-made-simple

**React Patterns Overview:**
1. HOC (Higher-Order Components)
2. Composition
3. Compound Pattern (Composition + Provider)
4. Portal Pattern
5. Render props
6. Hooks Pattern

## Anti-Patterns to Avoid:

**HOC Overuse:**
- **Problem:** Too many Higher-Order Components
- **Alternative:** Use hooks for simple logic

**Provider Hell:**
- **Problem:** Nested provider components creating deep hierarchies
- **Alternatives:** 
    - Combine related providers or use composite provider

**Overloaded Context:**
- **Problem:** Provider with too many contexts
- **Alternative:** For simpler situations use props or local state

**When NOT to Use Provider Pattern:**
- Local component state
- 2-3 components that need the data (use props instead)
- Values that change frequently (causes unnecessary re-renders)
- When shared state is only used in small section of the app
**Render Props Hell:**
- **Problem:** Nesting multiple render props creating callback pyramids
- **Alternative:** Use hooks
- **When NOT to Use Render Props:**
    - When the content is static (use children prop instead)
    - When hooks can provide the same functionality
    - When you're nesting 2-3 render props
    - For simple conditional rendering
## Red Flags to Watch For:

**Excessive Nesting:**
- **Problem:** Sign of overusing patterns
- **Solution:** Simplify component hierarchies

**Debugging Nightmare:**
- **Problem:** Complex pattern combinations make debugging difficult
- **Solution:** Prioritize code clarity and simplicity

**Performance Issues:**
- **Problem:** Too many providers or render props cause unnecessary re-renders
- **Solution:** Optimize rendering and minimize context updates

**Developer Experience:**
- **Problem:** New team members struggle to understand code
- **Solution:** Use simpler patterns when possible, document complex implementations

## Solutions

**Simple Alternatives:**
- **Custom hooks** for reusing logic
- **Simple composition** with props
- **Straightforward conditional rendering**
## Decision Framework

Before using a pattern, ask:
- Is this solving a real problem? Don't use patterns just because
- Will this be reused? If not, keep it simple
- Does this make the code easier to understand?
- Can I achieve the same result with simpler tools? Maybe with hooks or props
- Will this scale well?

Remember: the best pattern is often no pattern at all. Start simple and refactor to patterns when you have a clear need for them.

## Questions

**State Management:**
When should we use an external state management library instead of a Provider or hook?

**Portal vs HOC Architecture:**
Why would you choose using a Portal instead of implementing a HOC at the root page level? What are your thoughts on traceability and debugging?