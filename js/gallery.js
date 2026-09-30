/* Instagram gallery for @golem_craftworks. */
(function () {
    var FEED_URL = "https://feeds.behold.so/9tKmk9rI6e3la8PRi2Hp";
    var grid = document.getElementById("ig-grid");
    var empty = document.getElementById("ig-empty");
    if (!FEED_URL || !grid) return;

    fetch(FEED_URL)
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (data) {
            var posts = (data.posts || []).slice().sort(function (a, b) {
                return new Date(b.timestamp) - new Date(a.timestamp); // newest first
            });
            if (!posts.length) return;
            posts.forEach(function (p) {
                var size = p.sizes && (p.sizes.medium || p.sizes.small || p.sizes.large);
                var src = (size && size.mediaUrl) || (p.mediaType === "VIDEO" ? p.thumbnailUrl : p.mediaUrl);
                if (!src) return;
                var link = document.createElement("a");
                link.href = p.permalink; link.target = "_blank"; link.rel = "noopener";
                var img = document.createElement("img");
                img.src = src; img.loading = "lazy";
                img.alt = p.altText || p.prunedCaption || "Golem Craftworks post";
                var when = document.createElement("time");
                when.dateTime = p.timestamp;
                when.textContent = new Date(p.timestamp).toLocaleDateString("en-US", { month: "short", year: "numeric" });
                link.appendChild(img); link.appendChild(when); grid.appendChild(link);
            });
            if (grid.children.length) { grid.hidden = false; empty.hidden = true; }
        })
        .catch(function () { /* keep the Instagram link */ });
})();