import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'bg-white text-gray-900 rounded-xl border-gray-200 shadow-sm px-4 py-2.5 focus:border-forest-600 focus:ring-forest-600 text-[15px] transition-colors ' +
                className
            }
            ref={localRef}
        />
    );
});
