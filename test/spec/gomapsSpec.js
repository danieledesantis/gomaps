describe("Gomaps tests", function() {
    it("Test map initialization", function() {
      expect($('#test-map .gm-style').length > 0).toBe(true);
    });
});
