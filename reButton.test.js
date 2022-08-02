describe("test for my delete button", () => {
    beforeEach(() => {
        serverNameInput.value = 'Alice';
    });
    it('should add button to remover server', () => {
        submitServerInfo();
        const tr = serverTbody.childNodes;
        const button = tr[0].childNodes[2].firstChild.nodeName;
        expect(button).toBe('BUTTON');

    })
    it('should  remove server from TR & allServers{}', () => {
        submitServerInfo();

    })
})