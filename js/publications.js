const defined_publications = {
  /* ---- THESES ---- */
  "phd-thesis": {
    "title": "Jammer Mitigation in Multi-Antenna Communications",
    "authors": "Gian Marti",
    "venue": "Doctoral Thesis",
    "year": 2025,
    "image": "img/thesis.png",
    "imagePadding": "0px",
    "pdf": "https://www.research-collection.ethz.ch/server/api/core/bitstreams/59081bdc-21af-4f1c-9b48-f21f6c8b19af/content",
    "pdfLabel": "Thesis",
    "bibtex": "@phdthesis{marti2025jammer,\n  title={Jammer Mitigation in Multi-Antenna Communications},\n  author={Marti, Gian},\n  year={2025},\n  school={ETH Zurich}\n}",
    "abstract": "Jammers are malicious transmitters that emit interference to disrupt wireless systems. This thesis studies fundamental properties of jamming attacks on multi-antenna communication systems, and it develops methods to mitigate such jammers based on multi-antenna processing."
  },
  "masters-thesis": {
    "title": "Channels with a Helper",
    "authors": "Gian Marti",
    "venue": "Master's Thesis",
    "year": 2019,
    "image": "img/report.jpg",
    "pdf": "https://www.research-collection.ethz.ch/bitstream/handle/20.500.11850/395888/1/report_post.pdf",
    "pdfLabel": "Thesis",
    "award": "Awarded with the ETH Medal for outstanding Master's Theses.",
    "bibtex": "@mastersthesis{marti2019channels,\n  title={Channels with a Helper},\n  author={Marti, Gian},\n  year={2019},\n  school={ETH Zurich}\n}",
    "abstract": "This thesis studies (multiuser) communication channels where rate-limited side information is non-causally made available to the decoder(s) or the encoder(s), or both, through a helper. The considered channels are either additive-noise channels, Y=x+Z, where the helper is aware of the noise Z, or they are additive-noise additive-state channels, Y=x+S+Z, where the helper is cognizant of the state S but not the noise Z.<br><br>It is known that for a single-user additive-noise channel, the presence of a helper at the decoder increases capacity by the rate of help, regardless of the noise distribution. In this thesis, it is shown that analogous results hold for various multiuser channels as well as for channels where help is available at the encoder, or at the encoder and the decoder. An equivalent achievability result is given even for a case where help is available at the encoder only causally. If help is available at the encoder, however, the question whether an increase in capacity by the rate of help represents the optimum is in general left open—such a converse is provided only for discrete channels as well as for the Gaussian additive-noise channel. All achievability results for these additive-noise channels are attained by a technique which we call flash-helping, where the noise is described very accurately at some time and not described at other times.<br><br>For several channels with two sources of additive interference—noise and state—of which the helper observes only one (the state), capacity bounds are provided. It is also shown that for these channels, the increase in capacity caused by the helper remains bounded away from the rate of help."
  },
  /* ---- JOURNAL PAPERS ---- */
  "j-gnss": {
    "title": "GNSS Jammer and Spoofer Mitigation via Multi-Antenna Processing",
    "authors": "Jonas Elmiger, Gian Marti, Christoph Studer",
    "venue": "arXiv preprint",
    "year": 2025,
    "image": "img/25arxiv3.png",
    "pdf": "https://arxiv.org/pdf/2507.18166",
    "bibtex": "@article{elmiger2025gnss,\n  title={GNSS Jammer and Spoofer Mitigation via Multi-Antenna Processing},\n  author={Elmiger, Jonas and Marti, Gian and Studer, Christoph},\n  journal={arXiv preprint arXiv:2507.18166},\n  year={2025}\n}",
    "abstract": "Modern positioning relies on radio signals from global navigation satellite systems (GNSS). Their low receive power renders these radio signals susceptible to jamming attacks, in which malicious transmitters emit strong interference to disrupt signal acquisition. Moreover, GNSS are vulnerable to spoofing attacks, in which malicious transmitters mimic legitimate satellites by transmitting spurious GNSS signals. We propose SCHIEBER, a novel method for multi-antenna GNSS receivers that mitigates jammers as well as spoofers without requiring any prior knowledge of the receiver position or attack type: Jammers are mitigated during signal acquisition using a recently developed adaptive spatial filtering technique. Spoofers are identified and rejected after signal acquisition using a novel approach that tests the consistency of acquired signals by comparing their respective direction of arrival (DoA) and pseudorange estimates in a test that is invariant with respect to the unknown receiver position. We demonstrate the efficacy of our method using extensive simulations of a GPS L1 C/A system under spoofing and jamming attacks."
  },
  "j-sparse": {
    "title": "Sparse MIMO-OFDM Channel Estimation via RKHS Regularization",
    "authors": "James Delfeld, Gian Marti, Chris Dick",
    "venue": "arXiv preprint",
    "year": 2025,
    "image": "img/25arxiv2.png",
    "pdf": "https://arxiv.org/pdf/2511.20082",
    "bibtex": "@article{delfeld2025sparse,\n  title={Sparse {MIMO-OFDM} Channel Estimation via {RKHS} Regularization},\n  author={Delfeld, James and Marti, Gian and Dick, Chris},\n  journal={arXiv preprint arXiv:2511.20082},\n  year={2025}\n}",
    "abstract": "We propose a method for channel estimation in multiple-input multiple-output (MIMO) orthogonal frequency-division multiplexing (OFDM) wireless communication systems. The method exploits the band-sparsity of wireless channels in the delay-beamspace domain by solving a regularized optimization problem in a reproducing kernel Hilbert space (RKHS). A suitable representer theorem allows us to transform the infinite-dimensional optimization problem into a finite-dimensional one, which we then approximate with a low-dimensional surrogate. We solve the resulting optimization problem using a forward-backward splitting (FBS)-based algorithm. By exploiting the problem's modulation structure, we achieve a computational complexity per iteration that is quasi-linear in the number of unknown variables. We also propose a data-driven deep-unfolding based extension to improve the performance at a reduced number of iterations. We evaluate our channel estimators on ray-traced channels generated with SionnaRT. The results show that our methods significantly outperform linear methods such as linear minimum mean squared error (LMMSE) channel estimation based on aggregate channel statistics, both in terms of raw estimation accuracy as well as in downstream performance."
  },
  "j-jmd": {
    "title": "Joint Jammer Mitigation and Data Detection",
    "authors": "Gian Marti, Christoph Studer",
    "venue": "arXiv preprint",
    "year": 2025,
    "image": "img/25arxiv.png",
    "pdf": "https://arxiv.org/pdf/2510.02021",
    "bibtex": "@article{marti2025joint,\n  title={Joint Jammer Mitigation and Data Detection},\n  author={Marti, Gian and Studer, Christoph},\n  journal={arXiv preprint arXiv:2510.02021},\n  year={2025}\n}",
    "abstract": "Multi-antenna (or MIMO) processing is a promising solution to the problem of jammer mitigation. Existing methods mitigate the jammer based on an estimate of its spatial signature that is acquired through a dedicated training phase. This strategy has two main drawbacks: (i) it reduces the communication rate since no data can be transmitted during the training phase and (ii) it can be evaded by smart or multi-antenna jammers that do not transmit during the training phase or that dynamically change their subspace through time-varying beamforming. To address these drawbacks, we propose Joint jammer Mitigation and data Detection (JMD), a novel paradigm for MIMO jammer mitigation. The core idea of JMD is to estimate and remove the jammer interference subspace jointly with detecting the legitimate transmit data over multiple time slots. Doing so removes the need for a dedicated and rate-reducing training period while being able to mitigate smart and dynamic multi-antenna jammers. We provide two JMD-type algorithms, SANDMAN and MAED, that differ in the way they estimate the channels of the legitimate transmitters and achieve different complexity-performance tradeoffs. Extensive simulations demonstrate the efficacy of JMD for jammer mitigation."
  },
  "j-mash": {
    "title": "Universal MIMO Jammer Mitigation via Subspace Hiding",
    "authors": "Gian Marti, Christoph Studer",
    "venue": "IEEE Transactions on Signal Processing",
    "venueInfo": "early access",
    "venueUrl": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=78",
    "year": 2025,
    "image": "img/25tsp.png",
    "pdf": "https://arxiv.org/pdf/2412.19804",
    "bibtex": "@article{marti2025universal,\n  title={Universal {MIMO} Jammer Mitigation},\n  author={Marti, Gian and Studer, Christoph},\n  journal={IEEE Trans. Signal Process.},\n  year={early access}\n}",
    "abstract": "Multi-antenna processing enables jammer mitigation through spatial filtering, provided that the receiver knows the spatial signature of the jammer interference. Estimating this signature is easy for barrage jammers that transmit continuously and with static signature, but difficult for more sophisticated jammers. Smart jammers may deliberately suspend transmission when the receiver tries to estimate their spatial signature, or they may use time-varying beamforming to continuously change their spatial signature. To deal with such smart jammers, we propose MASH, the first method that indiscriminately mitigates all types of jammers. Assume that the transmitter and receiver share a common secret. Based on this secret, the transmitter embeds (with a time-domain transform) its signal in a secret subspace of a higher-dimensional space. The receiver applies a reciprocal transform to the receive signal, which (i) raises the legitimate transmit signal from its secret subspace and (ii) provably transforms any jammer into a barrage jammer, making estimation and mitigation via multi-antenna processing straightforward. Focusing on the massive multi-user MIMO uplink, we present three MASH-based data detectors and show their jammer-resilience via extensive simulations. We also introduce strategies for multi-user communication without a global secret as well as methods that use computationally efficient embedding and raising transforms."
  },  
  "j-sync": {
    "title": "Jammer-Resilient Time Synchronization in the MIMO Uplink",
    "authors": "Gian Marti, Flurin Arquint, Christoph Studer",
    "venue": "IEEE Transactions on Signal Processing",
    "venueInfo": "Vol. 73, pp. 706-720, Jan. 2025",
    "venueUrl": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=78",
    "year": 2025,
    "image": "img/24tsp.png",
    "pdf": "https://arxiv.org/pdf/2404.05335",
    "bibtex": "@article{marti2025sync,\n  title={Jammer-Resilient Time Synchronization in the {MIMO} Uplink},\n  author={Marti, Gian and Arquint, Flurin and Studer, Christoph},\n  journal={IEEE Trans. Signal Process.},\n  volume={73},\n  pages={706--720},\n  year={2025}\n}",
    "abstract": "Spatial filtering based on multiple-input multiple-output (MIMO) processing is a promising approach to jammer mitigation. Effective MIMO data detectors that mitigate smart jammers have recently been proposed, but they all assume perfect time synchronization between transmitter(s) and receiver. However, to the best of our knowledge, there are no methods for resilient time synchronization in the presence of smart jammers. To remedy this situation, we propose JASS, the first method that enables reliable time synchronization for the single-user MIMO uplink while mitigating smart jamming attacks. JASS detects a randomized synchronization sequence based on a novel optimization problem that fits a spatial filter to the time-windowed receive signal in order to mitigate the jammer. We underscore the efficacy of the proposed optimization problem by proving that it ensures successful time synchronization under certain intuitive conditions. We then derive an efficient algorithm for approximately solving our optimization problem. Finally, we use simulations to demonstrate the effectiveness of JASS against a wide range of different jammer types."
  },
  "j-ofdm": {
    "title": "Single-Antenna Jammers in MIMO-OFDM Can Resemble Multi-Antenna Jammers",
    "authors": "Gian Marti, Christoph Studer",
    "venue": "IEEE Communications Letters",
    "venueInfo": "Vol. 27, No. 11, pp. 3103–3107, Nov. 2023",
    "venueUrl": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=4234",
    "year": 2023,
    "image": "img/23comml.png",
    "pdf": "https://arxiv.org/pdf/2309.14059.pdf",
    "code": "https://github.com/IIP-Group/OFDM-jammer",
    "bibtex": "@article{marti2023single,\n  title={Single-Antenna Jammers in {MIMO-OFDM} Can Resemble Multi-Antenna Jammers},\n  author={Marti, Gian and Studer, Christoph},\n  journal={IEEE Commun. Lett.},\n  volume={23},\n  pages={3103--3107},\n  month={Nov.},\n  year={2023}\n}",
    "abstract": "In multiple-input multiple-output (MIMO) wireless systems with frequency-flat channels, a single-antenna jammer causes receive interference that is confined to a one-dimensional subspace. Such a jammer can thus be nulled using linear spatial filtering at the cost of one degree of freedom. Frequency-selective channels are often transformed into multiple frequency-flat subcarriers with orthogonal frequency-division multiplexing (OFDM). We show that when a single-antenna jammer violates the OFDM protocol by not sending a cyclic prefix, the interference received on each subcarrier by a multi-antenna receiver is, in general, not confined to a subspace of dimension one (as a single-antenna jammer in a frequency-flat scenario would be), but of dimension L, where L is the jammer's number of channel taps. In MIMO-OFDM systems, a single-antenna jammer can therefore resemble an L-antenna jammer. Simulations corroborate our theoretical results. These findings imply that mitigating jammers with large delay spread through linear spatial filtering is infeasible. We discuss some (im)possibilities for the way forward."
  },
  "j-smart": {
    "title": "Mitigating Smart Jammers in Multi-User MIMO",
    "authors": "Gian Marti, Torben Kölle, Christoph Studer",
    "venue": "IEEE Transactions on Signal Processing",
    "venueInfo": "Vol. 71, pp. 756–771, Feb. 2023",
    "venueUrl": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=78",
    "year": 2023,
    "image": "img/23tsp.png",
    "pdf": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10048559",
    "bibtex": "@article{marti2023mitigating,\n  title={Mitigating Smart Jammers in Multi-User {MIMO}},\n  author={Marti, Gian and K\\\"olle, Torben and Studer, Christoph},\n  journal={IEEE Trans. Signal Process.},\n  volume={71},\n  pages={756--771},\n  month={Feb.},\n  year={2023}\n}",
    "abstract": "Wireless systems must be resilient to jamming attacks. Existing mitigation methods based on multi-antenna processing require knowledge of the jammer's transmit characteristics that may be difficult to acquire, especially for smart jammers that evade mitigation by transmitting only at specific instants. We propose a novel method to mitigate smart jamming attacks on the massive multi-user multiple-input multiple-output (MU-MIMO) uplink which does not require the jammer to be active at any specific instant. By formulating an optimization problem that unifies jammer estimation and mitigation, channel estimation, and data detection, we exploit that a jammer cannot change its subspace within a coherence interval. Theoretical results for our problem formulation show that its solution is guaranteed to recover the users' data symbols under certain conditions. We develop two efficient iterative algorithms for approximately solving the proposed problem formulation: MAED, a parameter-free algorithm which uses forward-backward splitting with a box symbol prior, and SO-MAED, which replaces the prior of MAED with soft-output symbol estimates that exploit the discrete transmit constellation and which uses deep unfolding to optimize algorithm parameters. We use simulations to demonstrate that the proposed algorithms effectively mitigate a wide range of smart jammers without a priori knowledge about the attack type."
  },
  "j-snips": {
    "title": "Jammer Mitigation via Beam-Slicing for Low-Resolution mmWave Massive MU-MIMO",
    "authors": "Gian Marti*, Oscar Castañeda*, Christoph Studer",
    "venue": "IEEE Open Journal of Circuits and Systems",
    "venueInfo": "Vol. 2, pp. 820–832, Dec. 2021",
    "venueUrl": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8784029",
    "year": 2021,
    "image": "img/21ojcas.png",
    "pdf": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9645049",
    "bibtex": "@article{marti2021snips,\n  title={Jammer Mitigation via Beam-Slicing for Low-Resolution {mmWave} Massive {MU-MIMO}},\n  author={Marti, Gian and Casta\\~neda, Oscar and Studer, Christoph},\n  journal={IEEE Open J. Circuits Syst.},\n  volume={2},\n  pages={820--832},\n  month={Dec.},\n  year={2021}\n}",
    "abstract": "Millimeter-wave (mmWave) massive multi-user multiple-input multiple-output (MU-MIMO) promises unprecedented data rates for next-generation wireless systems. To be practically viable, mmWave massive MU-MIMO basestations (BSs) must rely on low-resolution data converters which leaves them vulnerable to jammer interference. This paper proposes beam-slicing, a method that mitigates the impact of a permanently transmitting jammer during uplink transmission for BSs equipped with low-resolution analog-to-digital converters (ADCs). Beam-slicing is a localized analog spatial transform that focuses the jammer energy onto few ADCs, so that the transmitted data can be recovered based on the outputs of the interference-free ADCs. We demonstrate the efficacy of beam-slicing in combination with two digital jammer-mitigating data detectors: SNIPS and CHOPS. Soft-Nulling of Interferers with Partitions in Space (SNIPS) combines beam-slicing with a soft-nulling data detector that exploits knowledge of the ADC contamination; projeCtion onto ortHOgonal complement with Partitions in Space (CHOPS) combines beam-slicing with a linear projection that removes all signal components co-linear to an estimate of the jammer channel. Our results show that beam-slicing enables SNIPS and CHOPS to successfully serve 65% of the user equipments (UEs) for scenarios in which their antenna-domain counterparts that lack beam-slicing are only able to serve 2% of the UEs."
  },
  "j-enc": {
    "title": "Encoder-Assisted Communications Over Additive Noise Channels",
    "authors": "Amos Lapidoth, Gian Marti<sup>†</sup>",
    "venue": "IEEE Transactions on Information Theory",
    "venueInfo": "Vol. 66, No. 11, pp. 6607–6616, Nov. 2020",
    "venueUrl": "https://ieeexplore.ieee.org/abstract/document/9151979",
    "year": 2020,
    "image": "img/20tit.png",
    "pdf": "https://www.isiweb.ee.ethz.ch/papers/docu/alap-gima-2020-4.pdf",
    "bibtex": "@article{lapidoth2020encoder,\n  title={Encoder-assisted communications over additive noise channels},\n  author={Lapidoth, Amos and Marti, Gian},\n  journal={IEEE Trans. on Inf. Theory},\n  volume={66},\n  number={11},\n  pages={6607--6616},\n  month={Nov.},\n  year={2020}\n}",
    "abstract": "A coding technique that is based on flash helping is proposed for communicating over additive noise channels where a helper observes the noise and can describe it to the encoder over a noise-free rate-limited bit pipe. The technique is applicable irrespective of whether the helper observes the noise causally or noncausally. On the single-user channel of general noise, the rate it achieves is the sum of the channel's capacity without a helper and the rate of the bit pipe. For Gaussian noise and under an average-power constraint, it is optimal. Analogous results are derived for the additive noise multiple-access channel and the single- user Exponential channel. The approach is applicable also in some (noncausal) discrete settings, as shown for the discrete modulo-additive noise channel."
  },
  "j-dec": {
    "title": "Decoder-Assisted Communications Over Additive Noise Channels",
    "authors": "Shraga I. Bross, Amos Lapidoth, Gian Marti<sup>&dagger;</sup>",
    "venue": "IEEE Transactions on Communications",
    "venueInfo": "Vol. 68, No. 7, pp. 4150–4161, Jul. 2020",
    "venueUrl": "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=26",
    "year": 2020,
    "image": "img/20tcom.png",
    "pdf": "https://www.isiweb.ee.ethz.ch/papers/docu/alap-gima-2020-2.pdf",
    "bibtex": "@article{bross2020decoder,\n  title={Decoder-assisted communications over additive noise channels},\n  author={Bross, Shraga I and Lapidoth, Amos and Marti, Gian},\n  journal={IEEE Trans. Commun.},\n  volume={68},\n  number={7},\n  pages={4150--4161},\n  month={Jul.},\n  year={2020}\n}",
    "abstract": "A number of additive noise networks are studied in the presence of a helper that observes the noise and assists the decoder by providing it with a rate-limited description of said noise. It is shown that ``flash helping''-where noise descriptions are provided infrequently but with great precision—is often optimal and typically increases capacity by the maximal allowed description rate. It requires no binning. The discrete setting of the modulo-additive noise channel is also discussed."
  },
  /* ---- CONFERENCE PAPERS ---- */
  "conf22": {
    "title": "A 0.32 mm<sup>2</sup> 100Mb/s 223mW ASIC in 22FDX for Joint Jammer Mitigation, Channel Estimation, and SIMO Data Detection",
    "authors": "Jonas Elmiger, Fabian Stuber, Oscar Castañeda, Gian Marti, Christoph Studer",
    "venue": "2025 IEEE European Solid-State Electronics Research Conference (ESSERC)",
    "venueUrl": "https://www.esserc2025.org",
    "year": 2025,
    "image": "img/25esserc.png",
    "pdf": "https://arxiv.org/pdf/2405.05100",
    "bibtex": "@inproceedings{elmiger20250,\n  title={A 0.32mm$^2$ 100Mb/s 223mW ASIC in 22FDX for Joint Jammer Mitigation, Channel Estimation, and SIMO Data Detection},\n  author={Elmiger, Jonas and Stuber, Fabian and Casta{\\~n}eda, Oscar and Marti, Gian and Studer, Christoph},\n  booktitle={2025 IEEE Europ. Solid-State Electronics Research Conf. (ESSERC)},\n  pages={649--652},\n  year={2025}\n}",
    "abstract": "We present the first single-input multiple-output (SIMO) receiver ASIC that jointly performs jammer mitigation, channel estimation, and data detection. The ASIC implements a recent algorithm called siMultaneous mitigAtion, Estimation, and Detection (MAED). MAED mitigates smart jammers via spatial filtering using a nonlinear optimization problem that unifies jammer estimation and nulling, channel estimation, and data detection to achieve state-of-the-art error-rate performance under jamming. The design supports eight receive antennas and enables mitigation of smart jammers as well as of barrage jammers. The ASIC is fabricated in 22 nm FD-SOI, has a core area of 0.32 mm², and achieves a throughput of 100 Mb/s at 223 mW, thus delivering 3× higher per-user throughput and 4.5× higher area efficiency than the state-of-the-art jammer-resilient detector."
  },
"conf21": {
    "title": "A Jammer-Resilient 2.87mm<sup>2</sup> 1.28MS/s 310mW Multi-Antenna Synchronization ASIC in 65nm",
    "authors": "Flurin Arquint, Oscar Castañeda, Gian Marti, Christoph Studer",
    "venue": "2025 IEEE European Solid-State Electronics Research Conference (ESSERC)",
    "venueUrl": "https://www.esserc2025.org",
    "year": 2025,
    "image": "img/25esserc2.png",
    "pdf": "https://arxiv.org/pdf/2405.05100",
    "bibtex": "@inproceedings{arquint2025jammer,\n  title={A Jammer-Resilient 2.87mm$^2$ 1.28MS/s 310mW Multi-Antenna Synchronization ASIC in 65nm},\n  author={Arquint, Flurin and Casta{\\~n}eda, Oscar and Marti, Gian and Studer, Christoph},\n  booktitle={2025 IEEE Europ. Solid-State Electronics Research Conf. (ESSERC)},\n  pages={653--656},\n  year={2025}\n}",
    "abstract": "We present the first ASIC implementation of jammerresilient multi-antenna time synchronization. The ASIC implements a recent algorithm that mitigates jamming attacks on synchronization signals using multi-antenna processing. Our design supports synchronization between a single-antenna transmitter and a 16-antenna receiver while mitigating smart jammers with up to two transmit antennas. The fabricated 65 nm ASIC has a core area of 2.87 mm², consumes a power of 310 mW, and supports a sampling rate of 1.28 mega-samples per second (MS/s)."
  },  
  "conf20": {
    "title": "Fundamental Limits for Jammer-Resilient Communication in Finite-Resolution MIMO",
    "authors": "Gian Marti, Alexander Stutz-Tirri, Christoph Studer",
    "venue": "2024 Asilomar Conference on Signals, Systems, and Computers",
    "venueUrl": "https://www.asilomarsscconf.org",
    "year": 2024,
    "image": "img/24asilomar.png",
    "pdf": "https://arxiv.org/pdf/2405.05100",
    "award": "2nd Place at the Asilomar Student Paper Contest",
    "bibtex": "@article{marti2024fundamental,\n  title={Fundamental Limits for Jammer-Resilient Communication in Finite-Resolution MIMO},\n  author={Marti, Gian and Stutz-Tirri, Alexander and Studer, Christoph},\n  booktitle={Proc. Asilomar Conf. Signals, Syst. Comp.},\n  pages={1--8},\n  month={Oct.},\n  year={2024}\n}",
    "abstract": "Spatial filtering based on multiple-input multiple-output (MIMO) processing is a powerful method for jammer mitigation. In principle, a MIMO receiver can null the interference of a single-antenna jammer at the cost of only one degree of freedom - if the number of receive antennas is large, communication performance is barely affected. In this paper, we show that the potential for MIMO jammer mitigation based on the digital outputs of finite-resolution analog-to-digital converters (ADCs) is fundamentally worse: Strong jammers will either cause the ADCs to saturate (when the ADCs' quantization range is small) or drown legitimate communication signals in quantization noise (when the ADCs' quantization range is large). We provide a fundamental bound on the mutual information between the quantized receive signal and the legitimate transmit signal. Our bound shows that, for any fixed ADC resolution, the mutual information tends to zero as the jammer power tends to infinity. Our bound also confirms the intuition that for every 6.02 dB increase in jamming power, the ADC resolution must be increased by 1 bit in order to prevent the mutual information from vanishing."
  },
  "conf19": {
    "title": "PyJama: Differentiable Jamming and Anti-Jamming with NVIDIA Sionna",
    "authors": "Fabian Ulbricht, Gian Marti, Reinhard Wiesmayr, Christoph Studer",
    "venue": "2024 IEEE Int. Workshop on Signal Processing Advances in Wireless Communications (SPAWC)",
    "venueUrl": "https://spawc2024.org",
    "year": 2024,
    "image": "img/24spawc_pyjama.png",
    "pdf": "https://arxiv.org/pdf/2407.15473",
    "code": "https://github.com/IIP-Group/pyjama",
    "bibtex": "@article{bucheli2024jammer,\n  title={{PyJama}: Differentiable Jamming and Anti-Jamming with {NVIDIA Sionna}},\n  author={Ulbricht, Fabian and Marti, Gian and Wiesmayr, Reinhard and Studer, Christoph},\n  booktitle={Proc. IEEE Int. Workshop Signal Process. Advances Wireless Commun. (SPAWC)},\n  pages={1--5},\n  month={Sep.},\n  year={2024}\n}",
    "abstract": "Despite extensive research on jamming attacks on wireless communication systems, the potential of machine learning for amplifying the threat of such attacks, or our ability to mitigate them, remains largely untapped. A key obstacle to such research has been the absence of a suitable framework. To resolve this obstacle, we release PyJama, a fully-differentiable open-source library that adds jamming and anti-jamming functionality to NVIDIA Sionna. We demonstrate the utility of PyJama (i) for realistic MIMO simulations by showing examples that involve forward error correction, OFDM waveforms in time and frequency, realistic channel models, and mobility; and (ii) for learning to jam. Specifically, we use stochastic gradient descent to optimize jamming power allocation over an OFDM resource grid. The learned strategies are non-trivial, intelligible, and effective."
  },
  "conf18": {
    "title": "Accurate Direct Positioning in Distributed MIMO Using Delay-Doppler Channel Measurements",
    "authors": "Benjamin Deutschmann, Christian Nelson, Mikael Henriksson, Gian Marti, Alva Kosasih, Nuutti Tervo, Erik Leitinger, Fredrik Tufvesson",
    "venue": "2024 IEEE Int. Workshop on Signal Processing Advances in Wireless Communications (SPAWC)",
    "venueUrl": "https://spawc2024.org",
    "year": 2024,
    "image": "img/24spawc_pos.png",
    "pdf": "https://arxiv.org/pdf/2404.15936",
    "bibtex": "@article{deutschmann2024accurate,\n  title={Accurate Direct Positioning in Distributed {MIMO} Using Delay-{Doppler} Channel Measurements},\n  author={Deutschmann, Benjamin JB and Nelson, Christian and Henriksson, Mikael and Marti, Gian and Kosasih, Alva and Tervo, Nuutti and Leitinger, Erik and Tufvesson, Fredrik},\n  booktitle={Proc. IEEE Int. Workshop Signal Process. Advances Wireless Commun. (SPAWC)},\n  pages={1--5},\n  month={Sep.},\n  year={2024}\n}",
    "abstract": "Distributed multiple-input multiple-output (D-MIMO) is a promising technology for simultaneous communication and positioning. However, phase synchronization between multiple access points in D-MIMO is challenging, which requires methods that function without the need for phase synchronization. We therefore present a method for D-MIMO that performs direct positioning of a moving device based on the delay-Doppler characteristics of the channel state information (CSI). Our method relies on particle-filter-based Bayesian inference with a state-space model. We use recent measurements from a sub-6 GHz D-MIMO OFDM system in an industrial environment to demonstrate centimeter accuracy under partial line-of-sight (LoS) conditions and decimeter accuracy under full non-LoS."
  },
  "conf17": {
    "title": "A Jammer-Mitigating 267Mb/s 3.78mm<sup>2</sup> 583mW 32×8 Multi-User MIMO Receiver in 22FDX",
    "authors": "Florian Bucheli, Oscar Castañeda, Gian Marti, Christoph Studer",
    "venue": "2024 IEEE Symposium on VLSI Technology & Circuits",
    "venueUrl": "https://www.vlsisymposium.org",
    "year": 2024,
    "image": "img/24vlsi.png",
    "pdf": "https://arxiv.org/pdf/2406.18149",
    "bibtex": "@article{bucheli2024jammer,\n  title={A Jammer-Mitigating 267 Mb/s 3.78 mm$^2$ 583 mW 32$\\times$8 Multi-User {MIMO} Receiver in 22FDX},\n  author={Bucheli, Florian and Casta{\\~n}eda, Oscar and Marti, Gian and Studer, Christoph},\n  booktitle={Proc. IEEE Int. Symp. VLSI Technol. Circuits},\n  pages={1--2},\n  month={Jun.},\n  year={2024}\n}",
    "abstract": "We present the first multi-user (MU) multiple-input multiple-output (MIMO) receiver ASIC that mitigates jamming attacks. The ASIC implements a recent nonlinear algorithm that performs joint jammer mitigation (via spatial filtering) and data detection (using a box prior on the data symbols). Our design supports 8 user equipments (UEs) and 32 basestation (BS) antennas, QPSK and 16-QAM with soft-outputs, and enables the mitigation of single-antenna barrage jammers and smart jammers. The fabricated 22 nm FD-SOI ASIC includes preprocessing, has a core area of 3.78 mm², achieves a throughput of 267 Mb/s while consuming 583 mW, and is the only existing design that enables reliable data detection under jamming attacks."
  },
  "conf16": {
    "title": "LoFi User Scheduling for Multiuser MIMO Wireless Systems",
    "authors": "Alexandra Gallyas-Sanhueza*, Gian Marti*, Victoria Palhares*, Reinhard Wiesmayr*, Christoph Studer",
    "venue": "2024 IEEE International Conference on Speech, Acoustics, and Signal Processing (ICASSP)",
    "venueUrl": "https://2024.ieeeicassp.org",
    "year": 2024,
    "image": "img/24icassp.png",
    "pdf": "https://arxiv.org/pdf/2401.04077.pdf",
    "code": "https://github.com/IIP-Group/lofi-user-scheduling",
    "bibtex": "@article{gallyas2024lofi,\n  title={LoFi User Scheduling for Multiuser {MIMO} Wireless Systems},\n  author={Gallyas-Sanhueza, Alexandra and Marti, Gian and Palhares, Victoria and Wiesmayr, Reinhard and Studer, Christoph},\n  booktitle={Proc. IEEE Int. Conf. Acoust., Speech, Signal Process. (ICASSP)},\n  pages={1--5},\n  month={Apr.},\n  year={2024}\n}",
    "abstract": "We propose new low-fidelity (LoFi) user equipment (UE) scheduling algorithms for multiuser multiple-input multiple-output (MIMO) wireless communication systems. The proposed methods rely on an efficient guess-and-check procedure that, given an objective function, performs paired comparisons between random subsets of UEs that should be scheduled in certain time slots. The proposed LoFi scheduling methods are computationally efficient, highly parallelizable, and gradient-free, which enables the use of almost arbitrary, non-differentiable objective functions. System simulations in a millimeter-wave (mmWave) multiuser MIMO scenario demonstrate that the proposed LoFi schedulers outperform a range of state-of-the-art user scheduling algorithms in terms of bit error-rate and/or computational complexity."
  },
  "conf15": {
    "title": "Active Eavesdropper Mitigation via Orthogonal Channel Estimation",
    "authors": "Gian Marti, Christoph Studer",
    "venue": "2024 International Zurich Seminar on Information and Communication (IZS)",
    "venueUrl": "https://www.izs.ethz.ch/2024/",
    "year": 2024,
    "image": "img/24izs.png",
    "pdf": "https://arxiv.org/pdf/2312.05025.pdf",
    "bibtex": "@article{marti2024active,\n  title={Active Eavesdropper Mitigation via Orthogonal Channel Estimation},\n  author={Marti, Gian and Studer, Christoph},\n  booktitle={Proc. Int. Zurich Seminar Inf. Commun. (IZS)},\n  pages={1--5},\n  month={Mar.},\n  year={2024}\n}",
    "abstract": "Beamforming is a powerful tool for physical layer security, as it can be used for steering signals towards legitimate receivers and away from eavesdroppers. An active eavesdropper, however, can interfere with the pilot phase that the transmitter needs to acquire the channel knowledge necessary for beamforming. By doing so, the eavesdropper can make the transmitter form beams towards the eavesdropper rather than towards the legitimate receiver. To mitigate active eavesdroppers, we propose VILLAIN, a novel channel estimator that uses secret pilots. When an eavesdropper interferes with the pilot phase, VILLAIN produces a channel estimate that is orthogonal to the eavesdropper's channel (in the noiseless case). We prove that beamforming based on this channel estimate delivers the highest possible signal power to the legitimate receiver without delivering any signal power to the eavesdropper. Simulations show that VILLAIN mitigates active eavesdroppers also in the noisy case."
  },
  "conf14": {
    "title": "Universal MIMO Jammer Mitigation via Secret Temporal Subspace Embeddings",
    "authors": "Gian Marti, Christoph Studer",
    "venue": "2023 Asilomar Conference on Signals, Systems, and Computers",
    "venueUrl": "https://www.asilomarsscconf.org",
    "year": 2023,
    "image": "img/23asilomar.png",
    "pdf": "https://arxiv.org/pdf/2305.01260.pdf",
    "poster": "img/asilomar_final_poster.pdf",
    "award": "2nd Place at the Asilomar Student Paper Contest",
    "bibtex": "@article{marti2023universal,\n  title={Universal MIMO Jammer Mitigation via Secret Temporal Subspace Embeddings},\n  author={Marti, Gian and Studer, Christoph},\n  booktitle={Proc. Asilomar Conf. Signals, Syst. Comp.},\n  pages={1--8},\n  month={Oct.},\n  year={2023}\n}",
    "abstract": "MIMO processing enables jammer mitigation through spatial filtering, provided that the receiver knows the spatial signature of the jammer interference. Estimating this signature is easy for barrage jammers that transmit continuously and with static signature, but difficult for more sophisticated jammers: Smart jammers may deliberately suspend transmission when the receiver tries to estimate their spatial signature, they may use time-varying beamforming to continuously change their spatial signature, or they may stay mostly silent and jam only specific instants (e.g., transmission of control signals). To deal with such smart jammers, we propose MASH, the first method that indiscriminately mitigates all types of jammers: Assume that the transmitter and receiver share a common secret. Based on this secret, the transmitter embeds (with a linear time-domain transform) its signal in a secret subspace of a higher-dimensional space. The receiver applies a reciprocal linear transform to the receive signal, which (i) raises the legitimate transmit signal from its secret subspace and (ii) provably transforms any jammer into a barrage jammer, which makes estimation and mitigation via MIMO processing straightforward. We show the efficacy of MASH for data transmission in the massive multi-user MIMO uplink."
  },
  "conf13": {
    "title": "High Dynamic Range mmWave Massive MU-MIMO with Householder Reflections",
    "authors": "Victoria Palhares, Gian Marti, Oscar Castañeda, Christoph Studer",
    "venue": "2023 Asilomar Conference on Signals, Systems, and Computers",
    "venueUrl": "https://www.asilomarsscconf.org",
    "year": 2023,
    "image": "img/23asilomar2.png",
    "pdf": "https://arxiv.org/pdf/2310.12835.pdf",
    "bibtex": "@article{palhares2023hdr,\n  title={High Dynamic Range mmWave Massive MU-MIMO with Householder Reflections},\n  author={Palhares, Victoria and Marti, Gian and Castañeda, Oscar and Studer, Christoph},\n  booktitle={Proc. Asilomar Conf. Signals, Syst. Comp.},\n  pages={1--8},\n  month={Oct.},\n  year={2023}\n}",
    "abstract": "All-digital massive multiuser (MU) multiple-input multiple-output (MIMO) at millimeter-wave (mmWave) frequencies is a promising technology for next-generation wireless systems. Low-resolution analog-to-digital converters (ADCs) can be utilized to reduce the power consumption of all-digital basestation (BS) designs. However, simultaneously transmitting user equipments (UEs) with vastly different BS-side receive powers either drown weak UEs in quantization noise or saturate the ADCs. To address this issue, we propose high dynamic range (HDR) MIMO, a new paradigm that enables simultaneous reception of strong and weak UEs with low-resolution ADCs. HDR MIMO combines an adaptive analog spatial transform with digital equalization: The spatial transform focuses strong UEs on a subset of ADCs in order to mitigate quantization and saturation artifacts; digital equalization is then used for data detection. We demonstrate the efficacy of HDR MIMO in a massive MU-MIMO mmWave scenario that uses Householder reflections as spatial transform."
  },
  "conf12": {
    "title": "Bit Error and Block Error Rate Training for ML-Assisted Communication",
    "authors": "Reinhard Wiesmayr*, Gian Marti*, Chris Dick, Haochuan Song, Christoph Studer",
    "venue": "2023 IEEE International Conference on Speech, Acoustics, and Signal Processing (ICASSP)",
    "venueUrl": "https://2023.ieeeicassp.org",
    "year": 2023,
    "image": "img/23icassp.png",
    "pdf": "https://arxiv.org/pdf/2210.14103.pdf",
    "code": "https://github.com/IIP-Group/BLER_Training",
    "bibtex": "@article{wiesmayr2023bit,\n  title={Bit Error and Block Error Rate Training for {ML}-Assisted Communication},\n  author={Wiesmayr, Reinhard and Marti, Gian and Dick, Chris and Song, Haochuan and Studer, Christoph},\n  booktitle={Proc. IEEE Int. Conf. Acoust., Speech, Signal Process. (ICASSP)},\n  pages={1--5},\n  month={Jun.},\n  year={2023}\n}",
    "abstract": "Even though machine learning (ML) techniques are being widely used in communications, the question of how to train communication systems has received surprisingly little attention. In this paper, we show that the commonly used binary cross-entropy (BCE) loss is a sensible choice in uncoded systems, e.g., for training ML-assisted data detectors, but may not be optimal in coded systems. We propose new loss functions targeted at minimizing the block error rate and SNR de-weighting, a novel method that trains communication systems for optimal performance over a range of signal-to-noise ratios. The utility of the proposed loss functions as well as of SNR de-weighting is shown through simulations in NVIDIA Sionna."
  },
  "conf11": {
    "title": "Joint Jammer Mitigation and Data Detection for Smart, Distributed, and Multi-Antenna Jammers",
    "authors": "Gian Marti, Christoph Studer",
    "venue": "2023 IEEE International Conference on Communications (ICC)",
    "venueUrl": "https://icc2023.ieee-icc.org",
    "year": 2023,
    "image": "img/23icc.png",
    "pdf": "https://arxiv.org/pdf/2211.07211.pdf",
    "bibtex": "@inproceedings{marti2023joint,\n  title={Joint Jammer Mitigation and Data Detection for Smart, Distributed, and Multi-Antenna Jammers},\n  author={Marti, Gian and Studer, Christoph},\n  booktitle={Proc. IEEE Int. Conf. Commun. (ICC)},\n  pages={1382--1387},\n  month={May},\n  year={2023}\n}",
    "abstract": "Multi-antenna (MIMO) processing is a promising solution to the problem of jammer mitigation. Existing methods mitigate the jammer based on an estimate of its subspace (or receive statistics) acquired through a dedicated training phase. This strategy has two main drawbacks: (i) it reduces the communication rate since no data can be transmitted during the training phase and (ii) it can be evaded by smart or multi-antenna jammers that are quiet during the training phase or that dynamically change their subspace through time-varying beamforming. To address these drawbacks, we propose Joint jammer Mitigation and data Detection (JMD), a novel paradigm for MIMO jammer mitigation. The core idea is to estimate and remove the jammer interference subspace jointly with detecting the transmit data over multiple time slots. Doing so removes the need for a dedicated and rate-reducing training period while mitigating smart and dynamic multi-antenna jammers. We instantiate our paradigm with SANDMAN, a simple and practical algorithm for multi-user MIMO uplink JMD. Extensive simulations demonstrate the efficacy of JMD, and of SANDMAN in particular, for jammer mitigation."
  },
  "conf10": {
    "title": "Beam Alignment for the Cell-Free mmWave Massive MU-MIMO Uplink",
    "authors": "Jannik Brun, Victoria Palhares, Gian Marti, Christoph Studer",
    "venue": "2022 IEEE International Workshop on Signal Processing Systems (SiPS)",
    "venueUrl": "http://sips2022.insa-rennes.fr",
    "year": 2022,
    "image": "img/22sips.png",
    "pdf": "https://arxiv.org/pdf/2207.09879.pdf",
    "bibtex": "@inproceedings{brun2022beam,\n  title={Beam Alignment for the Cell-Free {mmWave} Massive MU-MIMO {Uplink}},\n  author={Brun, Jannik and Palhares, Victoria and Marti, Gian and Studer, Christoph},\n  booktitle={Proc. IEEE Int. Workshop Signal Process. Syst. (SiPS)},\n  pages={1--6},\n  month={Nov.},\n  year={2022}\n}",
    "abstract": "Millimeter-wave (mmWave) cell-free massive multi-user (MU) multiple-input multiple-output (MIMO) systems combine the large bandwidths available at mmWave frequencies with the improved coverage of cell-free systems. However, to combat the high path loss at mmWave frequencies, user equipments (UEs) must form beams in meaningful directions, i.e., to a nearby access point (AP). At the same time, multiple UEs should avoid transmitting to the same AP to reduce MU interference. We propose an interference-aware method for beam alignment (BA) in the cell-free mmWave massive MU-MIMO uplink. In the considered scenario, the APs perform full digital receive beamforming while the UEs perform analog transmit beamforming. We evaluate our method using realistic mmWave channels from a commercial ray-tracer, showing the superiority of the proposed method over omnidirectional transmission as well as over methods that do not take MU interference into account."
  },
  "conf9": {
    "title": "Mitigating Smart Jammers in MU-MIMO via Joint Channel Estimation and Data Detection",
    "authors": "Gian Marti, Christoph Studer",
    "venue": "2022 IEEE International Conference on Communications (ICC)",
    "venueUrl": "https://icc2022.ieee-icc.org",
    "year": 2022,
    "image": "img/22icc.png",
    "pdf": "https://arxiv.org/pdf/2201.08778.pdf",
    "bibtex": "@inproceedings{marti2022mitgating,\n  title={Mitigating Smart Jammers in {MU-MIMO} via Joint Channel Estimation and Data Detection},\n  author={Marti, Gian and Studer, Christoph},\n  booktitle={Proc. IEEE Int. Conf. Commun. (ICC)},\n  pages={1336--1342},\n  month={May},\n  year={2022}\n}",
    "abstract": "Wireless systems must be resilient to jamming attacks. Existing mitigation methods require knowledge of the jammer's transmit characteristics. However, this knowledge may be difficult to acquire, especially for smart jammers that attack only specific instants during transmission in order to evade mitigation. We propose a novel method that mitigates attacks by smart jammers on massive multi-user multiple-input multiple-output (MU-MIMO) basestations (BSs). Our approach builds on recent progress in joint channel estimation and data detection (JED) and exploits the fact that a jammer cannot change its subspace within a coherence interval. Our method, called MAED (short for MitigAtion, Estimation, and Detection), uses a novel problem formulation that combines jammer estimation and mitigation, channel estimation, and data detection, instead of separating these tasks. We solve the problem approximately with an efficient iterative algorithm. Our simulation results show that MAED effectively mitigates a wide range of smart jamming attacks without having any a priori knowledge about the attack type."
  },
  "conf8": {
    "title": "Hybrid Jammer Mitigation for All-Digital mmWave Massive MU-MIMO",
    "authors": "Gian Marti*, Oscar Castañeda*, Sven Jacobsson, Giuseppe Durisi, Tom Goldstein, Christoph Studer",
    "venue": "2021 Asilomar Conference on Signals, Systems, and Computers",
    "venueUrl": "https://www.asilomarsscconf.org",
    "year": 2021,
    "image": "img/21asilomar.png",
    "pdf": "https://arxiv.org/pdf/2111.13055.pdf",
    "bibtex": "@inproceedings{marti2021hybrid,\n  title={Hybrid Jammer Mitigation for All-Digital {mmWave} Massive {MU-MIMO}},\n  author={Marti, Gian and Casta\\~neda, Oscar and Jacobsson, Sven and Durisi, Giuseppe and Goldstein, Tom and Studer, Christoph},\n  booktitle={Proc. Asilomar Conf. Signals, Syst. Comp.},\n  pages={93--99},\n  month={Oct.},\n  year={2021}\n}",
    "abstract": "Low-resolution analog-to-digital converters (ADCs) simplify the design of millimeter-wave (mmWave) massive multi-user multiple-input multiple-output (MU-MIMO) basestations, but increase vulnerability to jamming attacks. As a remedy, we propose HERMIT (short for Hybrid jammER MITigation), a method that combines a hardware-friendly adaptive analog transform with a corresponding digital equalizer: The analog transform removes most of the jammer's energy prior to data conversion; the digital equalizer suppresses jammer residues while detecting the legitimate transmit data. We provide theoretical results that establish the optimal analog transform as a function of the user equipments' and the jammer's channels. Using simulations with mmWave channel models, we demonstrate the superiority of HERMIT compared both to purely digital jammer mitigation as well as to a recent hybrid method that mitigates jammer interference with a nonadaptive analog transform."
  },
  "conf7": {
    "title": "Beam-Slicing for Jammer Mitigation in mmWave Massive MU-MIMO",
    "authors": "Oscar Castañeda*, Gian Marti*, Christoph Studer",
    "venue": "2021 IEEE International Workshop on Signal Processing Systems (SiPS)",
    "venueUrl": "https://sips2021.org",
    "year": 2021,
    "image": "img/21sips.png",
    "pdf": "https://arxiv.org/pdf/2108.03202.pdf",
    "bibtex": "@inproceedings{castaneda2021beamslicing,\n  title={Beam-Slicing for Jammer Mitigation in {mmWave} Massive {MU-MIMO}},\n  author={Casta\\~neda, Oscar and Marti, Gian and Studer, Christoph},\n  booktitle={Proc. IEEE Int. Workshop Signal Process. Syst. (SiPS)},\n  pages={176--181},\n  month={Oct.},\n  year={2021}\n}",
    "abstract": "Millimeter-wave (mmWave) massive multi-user multiple-input multiple-output (MU-MIMO) technology promises unprecedentedly high data rates for next-generation wireless systems. To be practically viable, mmWave massive MU-MIMO basestations (BS) must (i) rely on low-resolution data-conversion and (ii) be robust to jammer interference. This paper considers the problem of mitigating the impact of a permanently transmitting jammer during uplink transmission to a BS equipped with low-resolution analog-to-digital converters (ADCs). To this end, we propose SNIPS, short for Soft-Nulling of Interferers with Partitions in Space. SNIPS combines beam-slicing---a localized, analog spatial transform that focuses the jammer energy onto a subset of all ADCs---together with a soft-nulling data detector that exploits knowledge of which ADCs are contaminated by jammer interference. Our numerical results show that SNIPS is able to successfully serve 65% of the user equipments (UEs) for scenarios in which a conventional antenna-domain soft-nulling data detector is only able to serve 2% of the UEs."
  },
  "conf6": {
    "title": "Multiuser MIMO Detection With Composite NUV Priors",
    "authors": "Gian Marti, Raphael Keusch, Hans-Andrea Loeliger",
    "venue": "2021 IEEE International Symposium on Topics in Coding (ISTC)",
    "venueUrl": "https://istc2021.org",
    "year": 2021,
    "image": "img/21istc.png",
    "pdf": "https://www.isiweb.ee.ethz.ch/papers/docu/gima-rake-aloe-ISTC-2021.pdf",
    "bibtex": "@inproceedings{marti2021istc,\n  title={Multiuser {MIMO} Detection With Composite {NUV} Priors},\n  author={Marti, Gian and Keusch, Raphael and Loeliger, Hans-Andrea},\n  booktitle={Proc. IEEE Int. Symp. Topics Coding (ISTC)},\n  pages={1--5},\n  month={Aug.},\n  year={2021}\n}",
    "abstract": "Normals with unknown variances (NUV) representations encompass variational representations of sparsifying norms and priors for sparse Bayesian learning. Recently, a binarizing NUV prior has been proposed and shown to work very well on certain approximation problems. We elaborate on this new prior and begin to explore its use for recovery problems. Concretely, we apply the method to the multiuser multiple-input multiple-output (MIMO) detection problem. Empirically, the method outperforms existing approaches based on convex relaxations and is more robust than a method based on approximate message-passing."
  },
  "conf5": {
    "title": "Why Maximum-A-Posteriori Blind Image Deblurring Works After All",
    "authors": "Gian Marti, Boxiao Ma, Hans-Andrea Loeliger",
    "venue": "2021 European Signal Processing Conference (EUSIPCO)",
    "venueUrl": "https://eusipco2021.org",
    "year": 2021,
    "image": "img/21eusipco.png",
    "pdf": "https://eurasip.org/Proceedings/Eusipco/Eusipco2021/pdfs/0000666.pdf",
    "bibtex": "@inproceedings{marti2021eusipco,\n  title={Why Maximum-A-Posteriori Blind Image Deblurring Works After All},\n  author={Marti, Gian and Ma, Boxiao and Loeliger, Hans-Andrea},\n  booktitle={Proc. Eur. Signal Process. Conf. (EUSIPCO)},\n  pages={666--670},\n  month={Aug.},\n  year={2021}\n}",
    "abstract": "Maximum-a-posteriori (MAP) methods, while being a standard choice for many estimation problems, have been considered problematic for blind image deblurring: They have been suspected of preferring blurry images to sharp ones. Alternative methods without this apparent defect have been proposed instead. Reservations about MAP methods for blind image deblurring persist even as their close relation to these alternatives has become evident.<br><br>We revisit the literature on this topic and argue that the original rejection of MAP methods was ill-founded. We show that the MAP approach can prefer sharp images over blurry ones. Furthermore, we show experimentally that the MAP approach can in principle achieve deblurring results that are competitive with the allegedly superior methods. We thereby challenge some traditional notions of the relevant causes underlying successful blind deblurring to obtain a more accurate understanding of the blind image deblurring problem."
  },
  "conf4": {
    "title": "Other Helper Capacities",
    "authors": "Amos Lapidoth, Gian Marti, Yiming Yan<sup>†</sup>",
    "venue": "2021 IEEE International Symposium on Information Theory (ISIT)",
    "venueUrl": "https://2021.ieee-isit.org/default.asp",
    "year": 2021,
    "image": "img/21isit.png",
    "pdf": "https://www.isiweb.ee.ethz.ch/papers/docu/alap-gima-yiya-2021-2.pdf",
    "bibtex": "@inproceedings{lapidoth2021isit,\n  title={Other Helper Capacities},\n  author={Lapidoth, Amos and Marti, Gian and Yan, Yiming},\n  booktitle={Proc. IEEE Int. Symp. Inf. Theory (ISIT)},\n  pages={1272--1277},\n  month={Jul.},\n  year={2021}\n}",
    "abstract": "The erasures-only capacity, the listsize capacity, and the cutoff rate are computed for the modulo-additive noise channel with a helper. In one scenario the helper provides a rate-limited description of the noise sequence to the decoder and in the other to the encoder. In both scenarios the gains in these capacities thanks to the helper can exceed the helper's rate."
  },
  "conf3": {
    "title": "Encoder-Assistance for Additive Noise Channels",
    "authors": "Amos Lapidoth, Gian Marti<sup>†</sup>",
    "venue": "2020 IEEE Information Theory Workshop (ITW)",
    "venueUrl": "https://itw2020.it",
    "year": 2021,
    "image": "img/20itw.png",
    "pdf": "https://www.isiweb.ee.ethz.ch/papers/docu/alap-gima-2021-1.pdf",
    "bibtex": "@inproceedings{lapidoth2020itw,\n  title={Encoder-Assistance for Additive Noise Channels},\n  author={Lapidoth, Amos and Marti, Gian},\n  booktitle={Proc. IEEE Inf. Theory Workshop (ITW)},\n  pages={1--5},\n  month={Apr.},\n  year={2021}\n}",
    "abstract": "Flash helping has recently been shown to be an effective technique for describing additive noise to a decoder. It is shown here to be effective also in assisting the encoder: it achieves the helper capacity on the single-user Gaussian channel, on the multiple-access Gaussian channel, on the Exponential channel, and on the discrete modulo-additive noise channel. Most of the results hold irrespective of whether the helper observes the noise causally or noncausally."
  },
  "conf2": {
    "title": "SABRE: Protecting Bitcoin against Routing Attacks",
    "authors": "Maria Apostolaki, Gian Marti, Jan Müller, Laurent Vanbever",
    "venue": "2019 Network and Distributed System Security Symposium (NDSS)",
    "venueUrl": "https://www.ndss-symposium.org/ndss2019/",
    "year": 2019,
    "image": "img/19ndss.png",
    "pdf": "https://nsg.ee.ethz.ch/fileadmin/user_upload/publications/ndss19-final252.pdf",
    "bibtex": "@inproceedings{sabre,\n  title={SABRE: Protecting Bitcoin against Routing Attacks.},\n  author={Apostolaki, Maria and Marti, Gian and Müller, Jan and Vanbever, Laurent},\n  booktitle={Proc. Annu. Netw. Distrib. Syst. Security Symp. (NDSS)},\n  pages={1--15},\n  month={Feb.},\n  year={2019}\n}",
    "abstract": "Nowadays Internet routing attacks remain practically effective as existing countermeasures either fail to provide protection guarantees or are not easily deployable. Blockchain systems are particularly vulnerable to such attacks as they rely on Internet-wide communications to reach consensus. In particular, Bitcoin—the most widely-used cryptocurrency—can be split in half by any AS-level adversary using BGP hijacking.<br><br>In this paper, we present SABRE, a secure and scalable Bitcoin relay network which relays blocks worldwide through a set of connections that are resilient to routing attacks. SABRE runs alongside the existing peer-to-peer network and is easily deployable. As a critical system, SABRE design is highly resilient and can efficiently handle high bandwidth loads, including Denial of Service attacks.<br><br>We built SABRE around two key technical insights. First, we leverage fundamental properties of inter-domain routing (BGP) policies to host relay nodes: (i) in networks that are inherently protected against routing attacks; and (ii) on paths that are economically-preferred by the majority of Bitcoin clients. These properties are generic and can be used to protect other Blockchain-based systems. Second, we leverage the fact that relaying blocks is communication-heavy, not computation-heavy. This enables us to offload most of the relay operations to programmable network hardware (using the P4 programming language). Thanks to this hardware/software co-design, SABRE nodes operate seamlessly under high load while mitigating the effects of malicious clients.<br><br>We present a complete implementation of SABRE together with an extensive evaluation. Our results demonstrate that SABRE is effective at securing Bitcoin against routing attacks, even with deployments of as few as 6 nodes."
  },
  "conf1": {
    "title": "Heart Sound Classification Using Deep Structured Features",
    "authors": "Michael Tschannen, Thomas Kramer, Gian Marti, Matthias Heinzmann, Thomas Wiatowski",
    "venue": "2016 Computing in Cardiology Conference (CinC)",
    "venueUrl": "http://www.cinc2016.org",
    "year": 2016,
    "image": "img/16cinc.png",
    "pdf": "https://archive.physionet.org/challenge/2016/papers/tschannen.pdf",
    "code": "https://www.mins.ee.ethz.ch/research/downloads/PyScatter.html",
    "bibtex": "@inproceedings{tschannen2016heart,\n  title={Heart sound classification using deep structured features},\n  author={Tschannen, Michael and Kramer, Thomas and Marti, Gian and Heinzmann, Matthias and Wiatowski, Thomas},\n  booktitle={Proc. Comput. Cardiol. Conf. (CinC)},\n  pages={565--568},\n  month={Sep.},\n  year={2016}\n}",
    "abstract": "We present a novel machine learning-based method for heart sound classification which we submitted to the PhysioNet/CinC Challenge 2016. Our method relies on a robust feature representation - generated by a wavelet-based deep convolutional neural network (CNN) - of each cardiac cycle in the test recording, and support vector machine classification. In addition to the CNN-based features, our method incorporates physiological and spectral features to summarize the characteristics of the entire test recording. The proposed method obtained a score, sensitivity, and specificity of 0.812, 0.848, and 0.776, respectively, on the hidden challenge testing set."
  }  
}

// Render a publication entry
function renderPublication(id) {
  const pub = defined_publications[id];
  if (!pub) return '';

  const venueDisplay = pub.venueInfo
    ? `<a href="${pub.venueUrl || '#'}" target="_blank">${pub.venue},</a> ${pub.venueInfo}`
    : (pub.venueUrl ? `<a href="${pub.venueUrl}" target="_blank">${pub.venue}</a>` : pub.venue);

  const awardHtml = pub.award
    ? `<div style="color:#666666">&nbsp;<i class="fa fa-trophy"></i> ${pub.award}</div>`
    : '';

  const posterHtml = pub.poster
    ? `<li><a href="${pub.poster}" target="_blank"><i class="fa fa-image"></i> Poster</a></li>`
    : '';

  const codeHtml = pub.code
    ? `<li><a href="${pub.code}" target="_blank"><i class="fa fa-file-code-o"></i> Code</a></li>`
    : '';

  return `
    <div class="row row-spacing" style="margin-bottom: 0px;">
      <div class="col-sm-12">
        <div class="row publication-${id}">
          <div class="col-md-1 col-sm-3" style="width: 100px; margin-top: 5px;">
            <a href="${pub.pdf}" target="_blank">
              <img src="${pub.image}" class="img-rounded-border" style="padding: ${pub.imagePadding || '4px'};" alt="">
            </a>
          </div>
          <div class="col-md-10 col-sm-9">
            <div class="upper-row">
              <b class="title">${pub.title}</b>
              <div class="authors">${pub.authors}</div>
              <div class="journal">${venueDisplay}</div>
            </div>
            <ul class="list-inline">
              <li><a href="#" onclick="abstractModal('publication-${id}'); return false;"><i class="fa fa-align-left"></i> Abstract</a></li>
              <li><a href="${pub.pdf}" target="_blank"><i class="fa fa-file-pdf-o"></i> ${pub.pdfLabel || 'Paper'}</a></li>
              ${posterHtml}
              ${codeHtml}
              <li><a href="#" onclick="bibtexModal('publication-${id}'); return false;"><i class="fa fa-quote-left"></i> BibTeX</a></li>
              ${awardHtml}
            </ul>
            <div class="hidden txt-bibtex">${pub.bibtex}</div>
            <div class="hidden txt-abstract"><p>${pub.abstract}</p></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Auto-render all pub-entry elements when page loads
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.pub-entry').forEach(el => {
    el.innerHTML = renderPublication(el.dataset.id);
  });
});
