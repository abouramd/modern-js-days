/*
 * The basic garbage collection algorithm is called “mark-and-sweep”.
 *
 * The following “garbage collection” steps are regularly performed:
 *
 * The garbage collector takes roots and “marks” (remembers) them.
 * Then it visits and “marks” all references from them.
 * Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
 * …And so on until every reachable (from the roots) references are visited.
 * All objects except marked ones are removed.
 */

/*
 * Summary
 * The main things to know:
 * 
 *  - Garbage collection is performed automatically. We cannot force or prevent it.
 *  - Objects are retained in memory while they are reachable.
 *  - Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole, as we’ve seen in the example above.
 *  - Modern engines implement advanced algorithms of garbage collection.
 * 
 * A general book “The Garbage Collection Handbook: The Art of Automatic Memory Management” (R. Jones et al) covers some of them.
 * 
 * If you are familiar with low-level programming, more detailed information about V8’s garbage collector is in the article A tour of V8: Garbage Collection.
 * 
 * The V8 blog also publishes articles about changes in memory management from time to time. Naturally, to learn more about garbage collection, you’d better prepare by learning about V8 internals in general and read the blog of Vyacheslav Egorov who worked as one of the V8 engineers. I’m saying: “V8”, because it is best covered by articles on the internet. For other engines, many approaches are similar, but garbage collection differs in many aspects.
 * 
 * In-depth knowledge of engines is good when you need low-level optimizations. It would be wise to plan that as the next step after you’re familiar with the language.
*/







