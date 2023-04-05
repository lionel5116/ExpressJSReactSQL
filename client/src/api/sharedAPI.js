import Config from './config';
import axios from 'axios';

export const fetchCandidateNominees = async () => {
    var url = Config.REST_URL + 'dac/odata/CandidateNominees?$filter=VotingSettingID eq 14 and LocationID eq 1'
    console.log(url)
    try
    {
        return await axios.get(url)
        .then(res => {
            return res.data.value;
        });
    } catch (err)
    {
      console.log("Issue Fetching Records " + err)
      return []
    }
}
