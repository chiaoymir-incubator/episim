import pandas as pd

df = pd.read_csv('WPP2019_TotalPopulationBySex.csv')  
# print(df)
print(df[(df["Time"] == 2020)].iloc[:5,])

# print(df.iloc[:5,])

# print(df[(df["縣市別"] == '新北市') & (df["區域"] == '板橋區')])

# print(df[((df["縣市別"] == '新北市') | (df["縣市別"] == '台北市')) & (df["區域"] == '全區')])

# print(df[(df["縣市別"] == '台北市') & (df["區域"] == '萬華區')])



# print(df.query("`縣市別` == '新北市' && `區域` == '全區'").sort_values(by=['日期']))