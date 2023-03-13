package back.back.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCompany is a Querydsl query type for Company
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCompany extends EntityPathBase<Company> {

    private static final long serialVersionUID = -665940589L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCompany company = new QCompany("company");

    public final StringPath categoryName = createString("categoryName");

    public final StringPath companyCode = createString("companyCode");

    public final StringPath companyName = createString("companyName");

    public final NumberPath<Integer> growthPoint = createNumber("growthPoint", Integer.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Integer> interestPoint = createNumber("interestPoint", Integer.class);

    public final QMinMaxRatio minMaxRatio;

    public final ListPath<News, QNews> news = this.<News, QNews>createList("news", News.class, QNews.class, PathInits.DIRECT2);

    public final back.back.domain.ratio.QNormalizedGrowthRatio normalizedGrowthRatio;

    public final ListPath<back.back.domain.ratio.NormalizedInterestRatio, back.back.domain.ratio.QNormalizedInterestRatio> normalizedInterestRatios = this.<back.back.domain.ratio.NormalizedInterestRatio, back.back.domain.ratio.QNormalizedInterestRatio>createList("normalizedInterestRatios", back.back.domain.ratio.NormalizedInterestRatio.class, back.back.domain.ratio.QNormalizedInterestRatio.class, PathInits.DIRECT2);

    public final back.back.domain.financialratio.QOperatingProfit operatingProfit;

    public final ListPath<back.back.domain.ratio.PostAndTrading, back.back.domain.ratio.QPostAndTrading> postAndTradings = this.<back.back.domain.ratio.PostAndTrading, back.back.domain.ratio.QPostAndTrading>createList("postAndTradings", back.back.domain.ratio.PostAndTrading.class, back.back.domain.ratio.QPostAndTrading.class, PathInits.DIRECT2);

    public final back.back.domain.financialratio.QSales sales;

    public final NumberPath<Integer> subscribed = createNumber("subscribed", Integer.class);

    public QCompany(String variable) {
        this(Company.class, forVariable(variable), INITS);
    }

    public QCompany(Path<? extends Company> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCompany(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCompany(PathMetadata metadata, PathInits inits) {
        this(Company.class, metadata, inits);
    }

    public QCompany(Class<? extends Company> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.minMaxRatio = inits.isInitialized("minMaxRatio") ? new QMinMaxRatio(forProperty("minMaxRatio")) : null;
        this.normalizedGrowthRatio = inits.isInitialized("normalizedGrowthRatio") ? new back.back.domain.ratio.QNormalizedGrowthRatio(forProperty("normalizedGrowthRatio")) : null;
        this.operatingProfit = inits.isInitialized("operatingProfit") ? new back.back.domain.financialratio.QOperatingProfit(forProperty("operatingProfit")) : null;
        this.sales = inits.isInitialized("sales") ? new back.back.domain.financialratio.QSales(forProperty("sales")) : null;
    }

}

