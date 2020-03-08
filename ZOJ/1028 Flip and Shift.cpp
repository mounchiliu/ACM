/*
给一串首尾相连有黑白色的球，可以将某一个球左右的球互换，输出能否经过数次调换之后将同色的球相互连在一起。 

设位置编号为1,2,3,...,n，n为小球的总数目。
若n为偶数，则不管如何交换小球，各个小球的位置编号奇偶性保持不变，因为交换的步长为2。
如果黑球是连续，当且仅当奇位置上的黑球个数与偶位置上的黑球个数相差不大于1时可以成立。
若n为奇数，则不管如何小球的布局如何，一定能使黑白球各自连续。
因为在这种情况下，奇位置上的小球通过交换可以移动到偶位置上。这样通过交换就可以使当前布局满足连续的必要性了。

关键词：巧算法
*/
#include <iostream>
using namespace std;

int main()
{
    int n,m,odd,even,inta[30];
    
    cin>>n;        //有n条待测链子 
    while(n--)
    {
        cin>>m;    //该条链子有m个小球
        
        odd=even=0;
        for(int i=0;i<m;i++)
        {
            cin>>inta[i];
            if(i%2==0)even+=inta[i];
                  else odd+=inta[i];        //求出奇数位置与偶数位置上黑球的个数   
        }
        
        if(m%2==1){cout<<"YES"<<endl;continue;}            //若该链球数为奇数，则总成立 
        if(abs(odd-even)<=1)cout<<"YES"<<endl;             //若奇数位置与偶数位置黑球数相差不大于1，则成立 
                       else cout<<"NO"<<endl;
    }
    
    return 0;
}
