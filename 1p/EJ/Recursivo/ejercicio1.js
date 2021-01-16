let fibonacci= function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    let r = fibonacci(n - 1);
    r.push(r[r.length - 1] + r[r.length - 2]);
    return r;
  }
};  console.log(fibonacci(8)); 