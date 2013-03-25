// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: SHIP
// ==========================================================================

var SHIP  = SHIP || {};


SHIP.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage : 'page1',

    page1: M.PageView.design({

        childViews: 'header content footer',

        header: M.ToolbarView.design({
            value: 'SHIP',
            anchorLocation: M.TOP
        }),

        content: M.ScrollView.design({
            childViews: 'label',
            label: M.LabelView.design({
            value: "Sidney Hoover's Introspections and Prayers"

            })
        }),

        footer: M.ToolbarView.design({
            value: 'My hymns are on bandcamp and SoundCloud',
            anchorLocation: M.BOTTOM
        })
    
    })

});