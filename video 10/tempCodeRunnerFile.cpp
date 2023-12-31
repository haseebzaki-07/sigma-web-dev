#include<iostream>
#include<vector>
#include<climits>
using namespace std;

int maximumOnesRow(vector<vector<int>> &V) {
    int maxOnes = INT_MIN;
    int maxOnesRow = -1;
    int column = V[0].size();

    for(int i = 0; i<V.size(); i++) {
        for(int j = 0; j<V[0].size(); j++){
            if(V[i][j] ==  1){
                int numberofOnes = column - j;
                if (numberofOnes > maxOnes) {
                maxOnes = numberofOnes; 
                maxOnesRow = i;
                }
                break;
            }
        }
    }
    return maxOnesRow;

}
int main() {

    int n,m;
    cin>>n>>m;
    vector<vector<int>> vec(n,vector<int> (m));

    for(int i = 0; i<n; i++) {
        for(int j = 0; j<m; j++) {
            cin>>vec[i][j];
        }
    }
    int res = maximumOnesRow(vec);
    cout<<res<<endl;

    return 0;
}