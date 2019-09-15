import React from 'react'
import style from './Content.module.css'

const Content = () => {
    return (
        <div className={style.content}>
            <h1>Content</h1>
            <div>
                <p>We used media queries to define a new layout when the viewport is 30 rem wide or greater. We defined the value in rems instead of pixels to improve the accessibility of the page for users increasing the font size. For most users with devices less than 500 px wide, which is approximately 30 rem when a rem is the default 16 px, the narrow layout will appear. However, if users have increased their font size, they may get the narrow layout on their tablet or even desktop monitor.

                    While we could have turned the body into a column-direction flex container, with only sectioning level children, that’s the default layout, so it wasn’t necessary on the narrow screen. However, when we have wider viewports, we want the navigation to be between the header and the main content, not between the main content and the footer, so we need to change the order of the appearance. We set nav, header  to make theappear before all their sibling flex items. The siblings default to order: 0; which is the default and a greater value. The group order puts those two elements first, with header coming before nav, as that is the order of the source code, before all the other flex item siblings, in the order they appear in the source code. </p>
            </div>
        </div>
    )
};

export default Content;