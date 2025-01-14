The solution involves creating a separate function to generate the styles and using that function inside the `renderItem`. This ensures React correctly recognizes the change in styles. 

```javascript
//Solution Code
const generateItemStyle = (item) => (item.isSpecial ? { backgroundColor: 'red' } : { backgroundColor: 'blue' });

<FlatList
  data={this.state.items}
  renderItem={({ item }) => (
    <View style={generateItemStyle(item)}>
      <Text>{item.name}</Text>
    </View>
  )}
/>
```