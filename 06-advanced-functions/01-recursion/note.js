// terative thinking: the for loop:
{
  function pow(x, n) {
    let result = 1;

    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }

  alert(pow(2, 3)); // 8
}
// Recursive thinking: simplify the task and call self:
{
  function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }

  alert(pow(2, 3)); // 8
}
// short 
{
  function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
  }
}

// The maximal number of nested calls (including the first one) is called recursion depth. In our case, it will be exactly n.
// The maximal recursion depth is limited by JavaScript engine.We can rely on it being 10000, some engines allow more, but 100000 is probably out of limit for the majority of them.There are automatic optimizations that help alleviate this(“tail calls optimizations”), but they are not yet supported everywhere and work only in simple cases.
{

}









