import { useRef } from 'react';

const useScrollFadeIn = () => {
    const dom = useRef();

    // Obejct로 한번 감싼 이유는 component에 적용 할 때 Spread와 추후 style 등의 속성이 추가 될 예정이기 때문
    return {
        ref: dom,
    };
};