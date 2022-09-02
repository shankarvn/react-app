import React, { forwardRef, useRef, useState } from 'react';

export const PhoneInput: React.FC<any> = ({ }) => {

    let inputRef = useRef<HTMLInputElement>(null)

    const [lastSelectionStart, setSelectionStart] = useState(0);
    const [lastSelectionEnd, setSelectionEnd] = useState(0);


    const stripFormatting = (formattedValue: string) => {
        return formattedValue
            .split('')
            .filter(
                (part) => part !== '(' && part !== ')' && part !== '-' && part !== ' '
            )
            .join('');
    }

    const applyFormatting = (value: string) => {
        if (value.length === 0) {
            return '';
        }
        const digits = value.split('');
        const result = [];
        for (let i = 0; i < digits.length; i++) {
            if (i === 0) {
                result.push('(');
            }
            if (i === 3) {
                result.push(') ');
            }
            if (i === 6) {
                result.push('-');
            }
            if (digits[i] !== undefined) {
                result.push(digits[i]);
            } else {
                break;
            }
        }
        return result.join('');

    }


    const getCode = (e: any) => {
        e = e || window.event;
        return e.key;
    };

    const handleKeydown = (e: any) => {

        const isDeletionissued = e.keyCode === 8;
        if (!(isFinite(getCode(e)) || isDeletionissued)) {
            e.preventDefault();
        }
        if (isDeletionissued) {
            setSelectionStart(e.target.selectionStart);
            setSelectionEnd(e.target.selectionEnd);
        }
    }


    // Range selection and delete
    const handleKeyup = (e: any) => {

        const isDeletionissued = e.keyCode === 8;

        if (inputRef && inputRef.current) {
            const afterStripping = stripFormatting(inputRef?.current?.value || '');
            const afterApplyingFormatting = applyFormatting(afterStripping);
            console.log(afterStripping, afterApplyingFormatting);
            inputRef.current.value = afterApplyingFormatting;

            if (isDeletionissued) {
                inputRef.current.selectionStart = lastSelectionStart - 1;
                inputRef.current.selectionEnd = lastSelectionStart - 1;
            }
        }




    }


    return (
        <div>
            <input ref={inputRef}
                type="text"
                id="one"
                placeholder="(555) 555-5555"
                onKeyDown={handleKeydown}
                onKeyUp={handleKeyup}
            />
        </div>
    );
}
