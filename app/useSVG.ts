import React, { useEffect, useRef } from 'react';

const useSVGRenderer = (renderFunc: any) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container: any = containerRef.current;

        // Gọi hàm renderFunc để tạo ra nội dung SVG
        const svgContent = renderFunc();

        // Xóa nội dung cũ trong container (nếu có)
        while (container.firstChild) {
            container.firstChild.remove();
        }

        // Thêm nội dung SVG mới vào container
        container.innerHTML = svgContent;
    }, [renderFunc]);

    return containerRef;
};

export default useSVGRenderer;