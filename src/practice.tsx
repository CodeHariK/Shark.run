import { createSignal, JSX, onCleanup, onMount } from "solid-js";

import Prism from "prismjs"; // Explicitly import Prism
import { Accordion, GridLayout, VCarousel } from "solgaleo";
import "prismjs/components/prism-typescript.min.js";

import "./prism.css"

export function Code({ code, lang }: { code: string; lang: string }) {
    let codeRef: HTMLPreElement | undefined;
    const [highlightedCode, _setHighlightedCode] = createSignal(code);

    const highlight = () => {
        requestAnimationFrame(() => {
            if (codeRef) {
                Prism.highlightElement(codeRef.querySelector("code") as HTMLElement);
            }
        });
    };

    onMount(highlight);
    onCleanup(() => {
        if (codeRef) codeRef.innerHTML = "";
    });

    return (
        <pre ref={codeRef} class="line-numbers" style={{ "white-space": 'pre' }}>
            <code class={`language-${lang}`} innerHTML={highlightedCode()
                .replace(/</g, '&lt;').replace(/>/g, '&gt;')}></code>
        </pre>);
}

let Docs: { element: JSX.Element, doc: string, data: string }[] = [
    {
        doc: "C++",
        data: ``,
        element: <Code lang="ts" code={`

vector<int> ans;
for(int i = 0; i < k; i++) {
    ans.push_back(heap.top().second);
}

map<int, string> orderedMap;
unordered_map<int, string> unorderedMap;

map[n]
insert({key, value}), 
at(loc), 
find(key), 
erase(key), 
end(), 
size(), 
empty()

for (const auto& pair : map) {
    std::cout << pair.first << ": " << pair.second << std::endl;
}

priority_queue<pair<int,int>> heap;
for(auto [key, val]: count)
{
    heap.push({val, key});
}
heap.pop();

`} />
    },
    {
        doc: "1. Two Sum",
        data: `
        https://leetcode.com/problems/two-sum/description/
        `,
        element: <Code lang="ts" code={`vector<int> twoSum(vector<int>& nums, int target) {\r\n        unordered_map<int, int> numMap;\r\n        int n = nums.size();\r\n\r\n        for (int i = 0; i < n; i++) {\r\n            int complement = target - nums[i];\r\n            if (numMap.count(complement)) {\r\n                return {numMap[complement], i};\r\n            }\r\n            numMap[nums[i]] = i;\r\n        }\r\n\r\n        return {};\r\n    }`} />,
    },
    {
        doc: "347. Top K Frequent Elements",
        data: `
        https://leetcode.com/problems/top-k-frequent-elements/description/
        `,
        element: <Code lang="ts" code={`class Solution {\r\npublic:\r\n    vector<int> topKFrequent(vector<int>& nums, int k) \r\n    {\r\n        unordered_map<int,int> count;\r\n        for(int num: nums)\r\n        {\r\n            count[num]++;\r\n        }\r\n        priority_queue<pair<int,int>> heap;\r\n        for(auto [key, val]: count)\r\n        {\r\n            heap.push({val, key});\r\n        }\r\n        vector<int> ans;\r\n        for(int i = 0; i < k; i++)\r\n        {\r\n            ans.push_back(heap.top().second);\r\n            heap.pop();\r\n        }\r\n        return ans;\r\n    }\r\n};\r\n`} />,
    },
]

export function Practice() {

    const [codeIndex, setCodeIndex] = createSignal(0);

    return <GridLayout

        childrenStyle={{
            "align-content": "center",
        }}

        left={<VCarousel
            children={Docs.map((c, i) => {
                return <div
                    style={{
                        "border-radius": "1rem",
                        overflow: "clip"
                    }}
                    onClick={() => {
                        console.log(i)
                        setCodeIndex(i)
                    }}
                >
                    <Accordion
                        open={i == 0}
                        title={<div style={{
                            background: i == codeIndex() ? "var(--primary-container)" : "",
                            padding: ".7rem",
                        }}>
                            {c.doc}
                        </div>}

                        contentStyle={{
                            padding: ".5rem",
                        }}

                        children={c.data} />
                </div>
            })}
            listStyle={{ padding: "1rem" }}
            itemStyle={{}}
        />}

        gridStyle={{
            "grid-template-columns": "minmax(200px, 30%) 1fr"
        }}
    >
        <>{Docs[codeIndex()].element}</>
    </GridLayout>
}
