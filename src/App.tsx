import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import NewsCard from './components/NewsCard';
import NewsBanner from './components/NewsBanner';

import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <NewsBanner banners={news_banner_data} />
          </ScrollView>
        )}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default App;
