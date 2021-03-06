/*
  按位存储十进制高精度库
    - Failed Bamboo
	       2004-2-6
*/
#include <stdio.h>
#include <string.h>

#define MAXLEN 100
struct BigNum{
	int l;
	int c[MAXLEN + 1];
};

void Assign_int(BigNum& a , int k){
	memset(a.c , 0 , sizeof(a.c));
	a.l = 0;
	while(k > 0){
		a.c[++a.l] = k % 10;
		k /= 10;
	}
}

void Assign_str(BigNum& a , char* s){
	memset(a.c , 0 , sizeof(a.c));
	a.l = strlen(s);
	for(int i=a.l; i; i--){
		a.c[i] = (*s++) - '0';
	}
}

short comp(BigNum& a , BigNum& b){
	// return value :  a < b(-1) a = b(0) a > b(1)
	if(a.l < b.l) return -1;
	if(a.l > b.l) return 1;
	for(int i=a.l; i; i--){
		if(a.c[i] < b.c[i]) return -1;
		if(a.c[i] > b.c[i]) return 1;
	}
	return 0;
}

void add(BigNum& a , const BigNum& b , int& cnt){
	// BigNum a += b
	if(a.l < b.l) a.l = b.l;
	cnt = 0;
	for(int i=1; i<=a.l; i++){
		a.c[i] += b.c[i];
		if(a.c[i] >= 10)
		{
			a.c[i+1] += a.c[i] / 10;
			a.c[i] %= 10;
			cnt++;
		}
	}

	if(a.c[a.l+1]) a.l ++;		
}

void minus(BigNum& a , const BigNum& b){
	// BigNum a -= b
	// 这里默认a > b
	for(int i=1; i<=a.l; i++){
		a.c[i] -= b.c[i];
		if(a.c[i] < 0){
			a.c[i+1]--;
			a.c[i] += 10;
		}
	}
	if(a.l && !a.c[a.l]) a.l--;
}

void mul_int(BigNum& a , int k){
	// BigNum a *= int(k)
	for(int i=1; i<=a.l; i++){
		a.c[i] = a.c[i] * k + a.c[i-1] / 10;
		a.c[i-1] %= 10;
	}
	while(a.c[a.l] >= 10){
		a.c[a.l + 1] = a.c[a.l] / 10;
		a.c[a.l] %= 10;
		++a.l;
	}
}

void multiply(BigNum& c , const BigNum& a , const BigNum& b){
	// BigNum c = a * b
	memset(c.c , 0 , sizeof(c.c));
	c.l = a.l + b.l - 1;
	int i , j;
	for(i=1; i<=a.l; i++)
		for(j=1; j<=b.l; j++)
			c.c[i+j-1] += a.c[i] * b.c[j];
	for(i=1; i<=c.l; i++){
		c.c[i+1] += c.c[i] / 10;
		c.c[i] %= 10;
	}
	while(c.c[c.l+1]){
		++c.l;
		c.c[c.l + 1] = c.c[c.l] / 10;
		c.c[c.l] %= 10;
	}
}

void print(const BigNum& a){
	for(int i=a.l; i; i--)
		printf("%d" , a.c[i]);
	putchar('\n');
}

int main(){	
	char s1[12] , s2[12];
	int cnt;

	BigNum a , b;

	while(1)
	{
		scanf("%s%s" , s1 , s2);
		if(strcmp(s1 , "0") == 0 && strcmp(s2 , "0") == 0) break;
		Assign_str(a , s1);
		Assign_str(b , s2);
		add(a , b , cnt);
		if(cnt == 0) puts("No carry operation.");
		else if (cnt == 1) printf("%d carry operation.\n" , cnt);
		else printf("%d carry operations.\n" , cnt);
	}
	
	return 0;
}
