//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

//---------------------------------------------------------------------------

#pragma argsused
#include <iostream.h>

int main(int argc, char* argv[])
{
  long long n;
  while (cin>>n)
    cout<<2*n+1<<' '<<2*(n+1)*n
        <<' '<<2*(n+1)*n+1<<endl;
  return 0;
}
//---------------------------------------------------------------------------
 