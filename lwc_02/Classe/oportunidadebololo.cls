public with sharing class oportunidadebololo {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOppLwc(){//da para fazer uma lógica onde é acessado um parametro e definir uma pesquisa personalizada
        return [SELECT Id, Name, Amount, StageName, CreatedDate FROM Opportunity  ORDER BY CreatedDate DESC LIMIT 5];
    }
}