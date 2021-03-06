# EmptyState
The EmptyState component is an element that can be used as a placeholder when no data is present (such as an empty list, or a placeholder page for future content). This is only used when no data is available, rather than during loading (see [empty states pattern](https://pxblue.github.io/patterns/empty-states)).


## Usage
<div class="codeBlock">
    <div class="imgWrapper codeBlockImage">
        <img class="wrappedImg" style="max-height:450px" alt="Empty state with all props" src="./images/empty-state-placeholder.png">
    </div>
    
    <div class="codeBlockUsage">
    
        ```typescript
        import { EmptyState, wrapIcon } from '@pxblue/react-native-components';
        import _Battery from '@pxblue/icons-svg/battery.svg';
        const Battery = wrapIcon({ IconClass: _Battery });
        ...
        <EmptyState 
            title={'Nothing Found'} 
            description={'Not a single thing'}
            IconClass={Battery} 
        />
        ```
    
    </div>
</div>


## API
| Prop Name   | Description                             | Type                                               | Required | Default | Examples                        |
|-------------|-----------------------------------------|----------------------------------------------------|----------|---------|---------------------------------|
| title       | The main text to display                | `string`                                           | yes      |         | 'No Data Found'                 |
| description | The secondary text to display           | `string`                                           | no       |         | 'Come back to this page later'  |
| IconClass   | The primary icon                        | `React.Component<{ size: number, color: string }>` | no       |         | `WrappedLeaf`                   |
| iconSize    | The size of the primary icon (100-200)  | `number`                                           | no       | 100     | 24                              |
| iconColor   | The color of the primary icon           | `string`                                           | no       | `text`  | 'red'                           |
| actions     | Additional components to render below   | `JSX.Element`                                      | no       |         | `<Button title={'click me'} />` |
| theme       | Theme partial for default styling       | `DeepPartial<Theme>`                               | no       |         | { colors: { text: 'green' } }   |
