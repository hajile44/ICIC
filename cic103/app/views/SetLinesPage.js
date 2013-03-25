// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: cic103
// View: SetLinesPage
// ==========================================================================

cic103.SetLinesPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: cic103.MyController,
            action: 'init'
        }
    },
    
    cssClass: 'SetLinesPage',

    childViews: 'header content footer',

    header: M.ToolbarView.design({
        value: 'Christian I Ching',
        anchorLocation: M.TOP
    }),

    content: M.ScrollView.design({
        childViews: 'label',
        label: M.LabelView.design({
        value: 'Pray for guidance from the Holy Spirit.'
     // anchorLocation does not work here
        })
    }),

    footer: M.ToolbarView.design({
        value: 'FOOTER',
        anchorLocation: M.BOTTOM
    })

});

