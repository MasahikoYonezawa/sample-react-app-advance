import { useCallback, useMemo, useState } from 'react';
import { ChildArea } from './ChildArea';

export const App = () => {
    console.log('app');
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);

    const onChangeText = (e) => setText(e.target.value);

    const onClickOpen = () => setOpen(!open);

    const onClickClose = useCallback(() => setOpen(false), [setOpen]);

    const temp = useMemo(() => 1 + 3, []);
    console.log(temp);

    return (
        <div className="App">
            <input value={text} onChange={onChangeText} />
            <br />
            <br />
            <button onClick={onClickOpen}>表示</button>
            <ChildArea open={open} onClickClose={onClickClose}></ChildArea>
        </div>
    );
};
