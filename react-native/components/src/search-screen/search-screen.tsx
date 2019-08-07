import React, { createRef } from 'react';
import { Animated, FlatList, FlatListProps, ListRenderItem, StyleSheet, View } from 'react-native';
import { Header } from '../index';
import { blue, white } from '@pxblue/colors';
import { HeaderProps } from '../header/header';

export interface SearchScreenProps<T> {
  filterPredicate: (item: T, query: string) => boolean;
  headerProps: HeaderProps;
  flatListProps: FlatListProps<T>;
}

interface SearchScreenState {
  query: string;
  scrollDistance: Animated.Value;
}

export class SearchScreen<T> extends React.Component<SearchScreenProps<T>, SearchScreenState> {
  private headerRef = createRef<Header>();

  constructor(props: SearchScreenProps<T>) {
    super(props);

    this.state = {
      query: '',
      scrollDistance: new Animated.Value(0)
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.header()}
        {this.infoList()}
      </View>
    )
  }

  private header() {
    const { headerProps } = this.props;
    const { scrollDistance } = this.state;

    return (
      <Header
        {...headerProps}
        searchable={{
          ...headerProps.searchable,
          onChangeText: text => this.onChangeText(text)
        }}
        scrollDistance={scrollDistance}
      />
    )
  }

  private infoList() {
    const { flatListProps } = this.props;
    const { scrollDistance } = this.state;

    return (
      <View style={{zIndex: 1, flex: 1, paddingTop: Header.EXTENDED_HEIGHT}}>
      <FlatList
        {...flatListProps}
        style={[flatListProps.style, styles.infoList]}
        data={this.filteredData()}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: {
            contentOffset: {
              y: scrollDistance
            }
            }}]
        )}
      />
      </View>
    );
  }

  private filteredData() {
    const { flatListProps, filterPredicate } = this.props;
    const { query } = this.state;

    if (flatListProps.data) {
      return flatListProps.data.filter(value =>
        filterPredicate(value, query)
      );
    } else {
      return [];
    }
  }

  private onChangeText(text: string) {
    const { headerProps } = this.props;

    this.setState({ query: text });
    if (headerProps.searchable && headerProps.searchable.onChangeText) {
      headerProps.searchable.onChangeText(text);
    }
  }
}

const styles = StyleSheet.create({
  infoList: {
    flex: 1,
    marginTop: -Header.EXTENDED_HEIGHT,
  }
});
