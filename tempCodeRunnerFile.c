#include <stdio.h>
int main(){

    int i,j,n,newLength,d,key;
    float arr[1000];
    scanf("%d",&n);
    for(i=0;i<n;i++){
        scanf("%f", &arr[i]);
    }
    scanf("%d %d",&newLength,&d);

    for(int i=(n-newLength-1);i<n;i++){
        key = arr[i];
        printf("%.2f ",arr[i]);
        j = i-1;
        while(arr[j] > key && j >= 0){
            arr[j+1] = arr[j];
            j--;
        }
    
        arr[j+1] = key;
    }
    for(i=0;i<n-1;i++){
        
        printf("%.2lf ",arr[i]);
    }
    if(i==n-1) {
            printf("%.2lf",arr[i]);
        }
    
    return 1;

}