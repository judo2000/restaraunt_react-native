import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMsg] = useResults();

  const filterREsultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterREsultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList results={filterREsultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList
          results={filterREsultsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
