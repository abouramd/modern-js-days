let i = 0;
while (++i < 5) console.log(i);

i = 0;
while (i++ < 5) console.log(i);

// no, the first one use pre increment befor compare,
// and the second one compare then increment
// so the last loop will print 5 and the first is not 
