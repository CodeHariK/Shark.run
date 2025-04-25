// https://redis.io/blog/streaming-analytics-with-probabilistic-data-structures/

// https://www.youtube.com/watch?v=_TGJSXZvLT8&list=PL83Wfqi-zYZHSnOXH3kCkgyfk3Rqo_wzH&index=3

// https://veerpalbrar.github.io/blog/Solving-Top-K-Frequent-Objects-with-Count-Min-Sketch/
// https://redis.io/blog/count-min-sketch-the-art-and-science-of-estimating-stuff/
// https://medium.com/data-science/big-data-with-sketchy-structures-part-1-the-count-min-sketch-b73fb3a33e2a
// https://medium.com/data-science/big-data-with-sketchy-structures-part-2-hyperloglog-and-bloom-filters-73b1c4a2e6ad
// https://www.synnada.ai/blog/probabilistic-data-structures-in-streaming-count-min-sketch
// https://github.com/shenwei356/countminsketch
// https://en.wikipedia.org/wiki/Count%E2%80%93min_sketch

// https://redis.io/blog/meet-top-k-awesome-probabilistic-addition-redis/

// https://redis.io/glossary/hyperloglog/

// https://medium.com/@tech.anikghosh/probabilistic-data-structures-db5d238008eb

// https://hewi.blog/probabilistic-data-structures-part-1

// https://github.com/segmentio/topk/blob/main/topk.go

// https://www.youtube.com/watch?v=bYyRwGFSFbQ

// https://www.youtube.com/watch?v=qakGXuOW1S8
// https://www.youtube.com/watch?v=qA8l8TAMyig

// https://www.youtube.com/watch?v=pLIajuc31qk

// https://github.com/ByteByteGoHq/system-design-101
// https://github.com/donnemartin/system-design-primer

// https://developers.google.com/optimization/pack/bin_packing

const bloom_filter = `
# Bloom filter 
--

* [Wikipedia](https://en.wikipedia.org/wiki/Bloom_filter)
* [mCoding : Bloom Filters](https://www.youtube.com/watch?v=qZNJTh2NEiU)
* [Number0 : Bloom Filters](https://www.youtube.com/watch?v=eCUm4U3WDpM)
* [ByteByteGo : Bloom Filters](https://www.youtube.com/watch?v=V3pzxngeLqw)
* [Spanning Tree : What Are Bloom Filters?](https://www.youtube.com/watch?v=kfFacplFY4Y)
* [ByteMonk : Bloom Filters](https://www.youtube.com/watch?v=GT0En1dGntY)

Bloom filter is a space-efficient probabilistic data structure, that is used to test whether an element is a member of a set. False positive matches are possible, but false negatives are not - in other words, a query returns either "possibly in set" or "definitely not in set". Elements can be added to the set, but not removed.

## Uses

### Cache filtering
Content delivery networks deploy web caches around the world to cache and serve web content to users with greater performance and reliability. A key application of Bloom filters is their use in efficiently determining which web objects to store in these web caches. To prevent caching one-hit-wonders, a Bloom filter is used to keep track of all URLs that are accessed by users.
`
