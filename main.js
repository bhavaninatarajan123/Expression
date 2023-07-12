a=10;
b=5;
c='ring';
d=(a===b)&&(a<b)&&(b<c)
console.log("d="+d);

a=5;
b=8;
c=9;
d=(a>=b)||(c!=a)
console.log("d="+d);

a="world",b=5,c=34;
d=(a!=c)||(c>a)||(c===b)
console.log("d="+d);

a=12,b=8,c=5;
d=(a<=b)&&(c>a)&&(a!==c)
console.log("d="+d);

a='5',b='hello',c=8;
d=(a+b)&&(a>b)&&(c==b)
console.log("d="+d);

a=4,b=5
d=(a!=b)&&(a<b)
console.log("d="+d);

a=2,b=4,c=3
d=(a*b)&&(b*c)&&(c*a)
console.log("d="+d);

a=1,b=3,c=4
d=(a*b)&&(b*c)&&(c*a)
console.log("d="+d);

a=1,b=3,c=4
d=(a*b)&&(b*c)
console.log("d="+d);


a=2,b=4,c=3
d=(a*b)||(b*c)||(c*a)
console.log("d="+d);

a=2,b=3,c=4
d=(a<b)||(b<c)||(a<c)
console.log("d="+d);

a=4,b=5
d=(a!=b)&&(a<b)
console.log("d="+d);


a=10;
b=20;
c=a+b;
console.log(c);

a=10;
b=10;
c=a-b;
console.log(c);

a=10;
b=10;
c=a*b;
console.log(c);

a=10;
b=20;
c=a/b;
console.log(c);

a=10;
b=20;
c=a%b;
console.log(c);

a=10;
b=20;
c=a<b;
console.log(c);

a=10;
b=20;
c=a>b;
console.log(c);

a=10;
b=20;
a=b;
console.log(a);

a=10;
b=20;
a==b;
console.log(a);

a=10;
b=20;
a=a>=b;
console.log(a);

a=10;
b=20;
a=a>b;
console.log(a);

a=10;
b=20;
a=a<=b;
console.log(a);

a=10;
b=20;
a=a<b;
console.log(a);

a=10;
b=20;
a=a=b;
console.log(a);

a=5;
b=10;
a=a!=b;
console.log(a);

a=10,b=5,c=20;
d=(a<b)&&(a++)<=c;
console.log("d="+d);

a=1,b=2,c=3;
d=!((a=b)&&(b==c));
console.log("d="+d);

a=2,b=4,c=3;
d=(a<=b)&&(a%b<c);
console.log("d="+d);

a=1,b=2,c=3;
d=(a*b)&&(b*c)&&(c*a);
console.log("d="+d);

a=5,b=5,c=7;
d=(a!=b)||(b<c);
console.log("d="+d);

a=10,b=12,c=23;
d=(a==b)&&(c=+b)||(b/a);
console.log("d="+d);

a=5,b=10,c=25;
d=(a<=c)||(b=-c)||!(c<a);
console.log("d="+d);

a=15,b="Hello",c=10;
d=(a===b)||(a*b)||(c<a);
console.log("d="+d);

a=5,b="20",c=4;
d=(a*b)&&(a%b)||(a/c);
console.log("d="+d);

a=3,b="5",c=4;
d=(a+b)*(b<c)%(c-b);
console.log("d="+d);