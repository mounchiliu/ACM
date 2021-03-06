/*
找出2000000000以内能写成2^a*3^b*5^c*7^d的数，输入项数n，输出第n个这样的数

这样的数共有5842个，先找出它们存起来，再直接输出。输出格式比较麻烦。
找这样的数的方法是定义四个指针p2,p3,p5,p7，分别指向data数组的第一项 
项数   值       p2    p3    p5    p7 
 1  :  1      2*1   3*1   5*1   7*1     最小的是2，所以下一项是2，p2+1 
 2  :  2      2*2   3*1   5*1   7*1     最小的是3，所以下一项是3，p3+1 
 3  :  3      2*2   3*2   5*1   7*1     最小的是4，所以下一项是4，p2+1 
 4  :  4      2*3   3*2   5*1   7*1     最小的是5，所以下一项是5，p5+1 
 5  :  5      2*3   3*2   5*2   7*1     最小的是6，所以下一项是6，p2+1,p3+1 
 6  :  6      2*4   3*3   5*2   7*1     最小的是7，所以下一项是7，p7+1
 7  :  7      2*4   3*3   5*2   7*2     最小的是8，所以下一项是8，p2+1 
 8  :  8      2*5   3*3   5*2   7*2     最小的是9，所以下一项是9，p3+1 
 9  :  9      2*5   3*4   5*2   7*2     最小的是10，2*5=5*2=10，p2+1,p5+1 
 10 :  10     2*6   3*4   5*3   7*2     最小的是12，2*6=3*4=12，p2+1,p3+1 
 11 :  12     2*7   3*5   5*3   7*2     最小的是14，2*7=7*2=14，p2+1,p7+1 
 12 :  14     2*8   3*5   5*3   7*3     最小的是15，3*5=5*3=15，p3+1,p5+1
 13 :  15     2*8   3*6   5*4   7*3     最小的是16，2*8=16，p2+1 
 14 :  16     2*9   3*6   5*4   7*3     最小的是18，2*9=3*6=18，p2+1,p3+1
 15 :  18     2*10  3*7   5*4   7*3     最小的是20，2*10=5*4=20，p2+1,p5+1
 16 :  20     2*12  3*7   5*5   7*3     最小的是21，3*7=7*3=21，p3+1,p7+1（注意p2+1以后是从10变到12，所以并不是只加一而是p2所指向的数组序号加一） 
 17 :  21     2*12  3*8   5*5   7*4     最小的是24，2*12=3*8=24，p2+1,p3+1 
 18 :  24     2*14  3*9   5*5   7*4     最小的是25，5*5=25，p5+1 
 19 :  25     2*14  3*9   5*6   7*4     最小的是27，3*9=29，p3+1 
 20 :  27     2*14  3*10  5*6   7*4     最小的是28，2*14=7*4=28，p2+1,p7+1
 
还有一种更简单的方法是对x=2^a*3^b*5^c*7^d取对数，遍历所有a,b,c,d的值，存下来后快排，程序段注释在最后 

关键词：巧算法，数学题 
*/
#include<iostream>
#define MAXN 5843
using namespace std;

long data[MAXN];

int min(int a,int b,int c,int d)
{
    int x,y;
    
    x=a>b?b:a;
    y=c>d?d:c;
    
    return x>y?y:x;
}//求四个数最小值 

void solve(void)
{
    int p2=0,p3=0,p5=0,p7=0;
    data[0]=1;
    
    for(int i=1;i<MAXN;i++)
    {
        data[i]=min(2*data[p2],3*data[p3],5*data[p5],7*data[p7]);
        
        if(data[i]==2*data[p2])p2++;
        if(data[i]==3*data[p3])p3++;
        if(data[i]==5*data[p5])p5++;
        if(data[i]==7*data[p7])p7++;
    }
}//存下所有的humble number 

int main()
{
    int n;
    
    solve();
    while(cin>>n)
    {
        if(n==0)break;
        
        if(n%10==1&&n%100!=11)printf("The %dst humble number is %ld.\n",n,data[n-1]);
   else if(n%10==2&&n%100!=12)printf("The %dnd humble number is %ld.\n",n,data[n-1]);
   else if(n%10==3&&n%100!=13)printf("The %drd humble number is %ld.\n",n,data[n-1]);
                         else printf("The %dth humble number is %ld.\n",n,data[n-1]);
    }
    
    return 0;
}
/*
    for(int a=0;a<31;a++)
        for(int b=0;b<20;b++)
            for(int c=0;c<14;c++)
                for(int d=0;d<12;d++)
                {
                    x=a*Ln_2+b*Ln_3+c*Ln_5+d*Ln_7;
                    if(x<=Ln_2000000000)humble[n++]=exp(x)+0.5;
                }       
    sort(humble,humble+n);//#include<algorithm>
*/ 
