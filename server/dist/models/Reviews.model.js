var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import Reviews from '../migrations/Reviews.migration';
export const readReviews = async (query) => {
    const { sortBy = 'updatedAt', sortOrder = 'DESC' } = query, where = __rest(query, ["sortBy", "sortOrder"]);
    const reviews = await Reviews.findAll({
        where,
        order: [[sortBy, sortOrder]],
    });
    return reviews;
};
//# sourceMappingURL=Reviews.model.js.map