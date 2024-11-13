(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["1e1b729d"],{"1e1b729d":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"texts",{enumerable:!0,get:function(){return d;}}),t("e067c586");let d=[{value:"In the Tree or similar components (such as TreeSelect, Cascader), needs check function. It's unambiguous most of the time, but when a ",paraId:0},{value:"disabled",paraId:0},{value:" node appears somewhere in the middle, it's worth talking about. This article will introduce the logic of check conduction in antd. It should be noted that in different scenarios, there will be various requirements, and antd has chosen the most commonly used check conduction logic. If you need a different custom style, you can implement it yourself through ",paraId:0},{value:"checkStrictly",paraId:0},{value:".",paraId:0},{value:"Before we start, let's establish a consensus. That is, when a node is ",paraId:1,tocIndex:0},{value:"disabled",paraId:1,tocIndex:0},{value:", it cannot be clicked ",paraId:1,tocIndex:0},{value:"checked",paraId:1,tocIndex:0},{value:". Then we take the following Tree structure as an example:",paraId:1,tocIndex:0},{value:"Next, we check the root node ",paraId:2,tocIndex:0},{value:"parent 1",paraId:2,tocIndex:0},{value:", and analyze the similarities and differences of different check transmission strategies.",paraId:2,tocIndex:0},{value:"This is the most intuitive strategy, all nodes will be checked:",paraId:3,tocIndex:1},{value:"You can immediately see the problem with this strategy, we mentioned earlier that ",paraId:4,tocIndex:1},{value:"disabled",paraId:4,tocIndex:1},{value:" nodes are not allowed to be ",paraId:4,tocIndex:1},{value:"checked",paraId:4,tocIndex:1},{value:". But when the parent node is not ",paraId:4,tocIndex:1},{value:"disabled",paraId:4,tocIndex:1},{value:", its child nodes will be forcibly checked. This will cause the ",paraId:4,tocIndex:1},{value:"disabled",paraId:4,tocIndex:1},{value:' node to "can" be checked, which is obviously unreasonable.',paraId:4,tocIndex:1},{value:"From the checkbox interaction, it looks good, but it's not intuitive. After ",paraId:5,tocIndex:2},{value:"parent 1",paraId:5,tocIndex:2},{value:" is checked, ",paraId:5,tocIndex:2},{value:"leaf 2",paraId:5,tocIndex:2},{value:" is checked by conduction. But the middle node ",paraId:5,tocIndex:2},{value:"parent 1-0",paraId:5,tocIndex:2},{value:" is not checked. At some deep enough level, this strategy can cause the user to be unaware that a check has been propagated:",paraId:5,tocIndex:2},{value:"When there is no scrolling, the user can't realize that the upper ",paraId:6,tocIndex:2},{value:"disabled",paraId:6,tocIndex:2},{value:" is not checked, but the top is checked:",paraId:6,tocIndex:2},{value:"This is also the current strategy of antd, when a node is checked, it will propagate upwards and downwards from the node until ",paraId:7,tocIndex:3},{value:"disabled",paraId:7,tocIndex:3},{value:" stops. When there are multiple ",paraId:7,tocIndex:3},{value:"disabled",paraId:7,tocIndex:3},{value:" in the node, they will each check the status management:",paraId:7,tocIndex:3},{value:"Conversely check ",paraId:8,tocIndex:3},{value:"leaf 2",paraId:8,tocIndex:3},{value:", it will not conduct:",paraId:8,tocIndex:3},{value:"The advantage of this strategy is that users can clearly see the selection process. Compared with the previous strategy, users only need a small area to understand the check logic in the scrolling scene.",paraId:9,tocIndex:3},{value:"Note: We only introduce simple conduction logic here. Please refer to ",paraId:10,tocIndex:4},{value:"actual code",paraId:10,tocIndex:4},{value:" for real world apply. Some performance optimizations will also be done, such as skipping nodes that have been traversed through the cache mechanism.",paraId:10,tocIndex:4},{value:"When a node is checked, we will add ",paraId:11,tocIndex:5},{value:"key",paraId:11,tocIndex:5},{value:" to ",paraId:11,tocIndex:5},{value:"checkedKeys",paraId:11,tocIndex:5},{value:". We iterate over each ",paraId:11,tocIndex:5},{value:"key",paraId:11,tocIndex:5},{value:" in the new ",paraId:11,tocIndex:5},{value:"checkedKeys",paraId:11,tocIndex:5},{value:" for conduction checks. The first step will be conduction from top to bottom (in the example below we check ",paraId:11,tocIndex:5},{value:"0-0",paraId:11,tocIndex:5},{value:"):",paraId:11,tocIndex:5},{value:"We record the current node ",paraId:12,tocIndex:5},{value:"0-0",paraId:12,tocIndex:5},{value:" and the transmitted ",paraId:12,tocIndex:5},{value:"0-0-0",paraId:12,tocIndex:5},{value:" and ",paraId:12,tocIndex:5},{value:"0-0-1",paraId:12,tocIndex:5},{value:":",paraId:12,tocIndex:5},{value:"In the second step, we will conduct upwards from this node:",paraId:13,tocIndex:5},{value:"Similarly, record the node ",paraId:14,tocIndex:5},{value:"0",paraId:14,tocIndex:5},{value:" that was passed on:",paraId:14,tocIndex:5},{value:"When the parent node is checked, the parent node of the parent node may also be checked, so we need to continue to conduct upward until the root node or ",paraId:15,tocIndex:5},{value:"disabled",paraId:15,tocIndex:5},{value:" node.",paraId:15,tocIndex:5},{value:"Same as above, we will perform conduction traversal up and down, and then remove the conduction node from ",paraId:16,tocIndex:6},{value:"checkedKeys",paraId:16,tocIndex:6},{value:". Therefore no further repetition.",paraId:16,tocIndex:6},{value:"Before the early days of v3, we encountered that the ",paraId:17,tocIndex:7},{value:"disabled",paraId:17,tocIndex:7},{value:' check of Tree has different appeals in different scenarios (and each of them is "reasonable" when viewing fragmented appeals), and when it is extracted for inspection, We found that these fragmented demands can conflict with each other. Therefore, we sorted out its transmission logic and chose the most intuitive strategy. Of course, if the current implementation does not meet the requirements, you can implement it yourself through ',paraId:17,tocIndex:7},{value:"checkStrictly",paraId:17,tocIndex:7},{value:".",paraId:17,tocIndex:7}];}}]);